<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import { onMount, onDestroy } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { crossfade, fade, fly } from 'svelte/transition';
  import dragula from 'dragula';
  import { _ } from 'svelte-i18n';

  import { board, ranks, cards, focusedRank, password } from './store.js';
  import {
    updateBoard,
    updateCard,
    getCards,
    getBoard,
    getRanks,
  } from './api.js';
  import { getRankDetails } from './data.js';

  import PasswordWall from '$lib/components/productiveboard/PasswordWall.svelte';
  import Rank from '$lib/components/productiveboard/Rank.svelte';
  import Header from '$lib/components/productiveboard/Header.svelte';
  import Spinner from '$lib/components/productiveboard/Spinner.svelte';
  import Alert from '$lib/components/productiveboard/Alert.svelte';
  import IceBreaker from '$lib/components/productiveboard/IceBreaker.svelte';

  export let boardId;

  let tabButtonWidth = '';
  let hidden = false;
  let refreshIntervalId;
  let unsubscribe;
  let errorAlertVisible = false;
  let errorAlertMessage = 'Network error!';
  let errorClearTimeout;
  let connectionLost = false;
  let passwordRequired = false;
  let busy = true;
  let sortedRanks = [];

  let drake = dragula({
    revertOnSpill: true,
    copySortSource: false,
    copy: true,
    moves: (el) => el.dataset.drag !== 'false',
    accepts: (el, target) => {
      return (
        target.dataset.rankId !==
        $cards.find((c) => c.id === el.dataset.cardId).column
      );
    },
  });

  drake.on('over', (_el, container) => {
    const emptyText = container.querySelector('small');
    if (emptyText) emptyText.parentElement.classList.add('d-none');
  });

  drake.on('out', (_el, container) => {
    const emptyText = container.querySelector('small');
    if (emptyText) emptyText.parentElement.classList.remove('d-none');
  });

  drake.on('drop', async (el, target) => {
    const rankId = target.dataset.rankId;
    const cardId = el.dataset.cardId;
    const card = $cards.find((c) => c.id === cardId);
    const originalRankId = card.column;

    el.parentNode.removeChild(el);
    card.column = rankId;
    card.busy = true;
    $cards = $cards; // Trigger a redraw so the card picks up that it's busy
    try {
      cards.replace(card.id, await updateCard($board, card, originalRankId));
    } catch (err) {
      error('error.updating_card', err);
      card.column = originalRankId; // Send the card back
      card.busy = false;
      $cards = $cards; // Force redraw
    }
  });

  $: {
    switch ($ranks.length) {
      case 1:
        tabButtonWidth = 'col-12';
        break;
      case 2:
        tabButtonWidth = 'col-6';
        break;
      case 3:
        tabButtonWidth = 'col-4';
        break;
      case 4:
      default:
        tabButtonWidth = 'col-3';
        break;
    }
  }

  $: {
    sortedRanks = $ranks.sort((a, b) => (a.position < b.position ? -1 : 1));
  }

  const [cardSend, cardReceive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `,
      };
    },
  });

  function error(message, err) {
    if (err) console.error(err);
    errorAlertVisible = true;
    errorAlertMessage = message;

    if (errorClearTimeout) clearTimeout(errorClearTimeout);
    errorClearTimeout = setTimeout(() => (errorAlertVisible = false), 3000);
  }

  function handleError({ detail: { message, err } }) {
    error(message, err);
  }

  async function update() {
    if (!hidden || $board.id === 'none') {
      try {
        const [b, r, c] = await Promise.all([
          getBoard(boardId),
          getRanks(boardId),
          getCards(boardId),
        ]);
        board.set(b);
        ranks.set(r);
        cards.set(c);
        connectionLost = false;
      } catch {
        connectionLost = true;
      }
      if ($board.error == 'Not Found') {
        navigate('/not-found');
        throw new Error('Board not found');
      }
    }
  }

  async function checkPassword() {
    if (await isBoardEncrypted($board)) {
      passwordRequired = !(await checkBoardPassword($board, $password));
    } else {
      passwordRequired = false;
      password.set('');
    }
    return passwordRequired;
  }

  function compareBoards(a, b) {
    return (
      a.name === b.name &&
      a.voting_open === b.voting_open &&
      a.cards_open === b.cards_open &&
      a.ice_breaking === b.ice_breaking &&
      JSON.stringify(a.data) === JSON.stringify(b.data)
    );
  }

  onMount(async () => {
    // Update on initial load
    await update();
    await checkPassword();

    // Show first rank initially
    if ($ranks[0]) $focusedRank = $ranks[0].id;

    // Subscribe to board changes so we can post updates.
    // Compare updated boards to their last known value
    // to ensure we don't send supurfluous calls.
    let previousBoard = { ...$board };
    if ($board.owner)
      unsubscribe = board.subscribe((b) => {
        try {
          if (!compareBoards(previousBoard, b)) updateBoard(b);
        } catch (err) {
          error('error.updating_settings', err);
        }
        previousBoard = { ...b };
      });

    // Create an interval timer to resync updates
    refreshIntervalId && clearInterval(refreshIntervalId);
    refreshIntervalId = setInterval(async () => await update(), 10000);

    // Keep track of page visibility so we can pause updates while hidden
    document.addEventListener('visibilitychange', () => {
      hidden = document['hidden'];
    });
    busy = false;
  });

  onDestroy(() => {
    unsubscribe && unsubscribe();
    refreshIntervalId && clearInterval(refreshIntervalId);
  });
</script>

<svelte:head>
  <meta property="og:url" content="https://retro.tools/{boardId}" />
</svelte:head>

<div class="d-flex h-100 flex-column fixed-top fixed-bottom bg-light">
  <Header />

  {#if busy}
    <div
      transition:fade={{ duration: 200 }}
      class="position-absolute w-100 h-100"
    >
      <div class="d-flex justify-content-center h-100">
        <div class="d-flex flex-column justify-content-center">
          <Spinner color="primary" />
        </div>
      </div>
    </div>
  {:else if passwordRequired}
    <div
      transition:fade={{ duration: 200 }}
      class="w-100 h-100 position-absolute"
    >
      <PasswordWall on:accepted={checkPassword} />
    </div>
  {:else}
    <div
      transition:fade={{ duration: 200 }}
      class="d-none d-lg-block scroll h-100"
    >
      <IceBreaker class="w-50" />
      <div
        class="d-none d-lg-flex justify-content-center py-3 overflow-hidden
        min-vh-90"
      >
        {#each sortedRanks as rank, i (rank.id)}
          <Rank
            bind:rank
            bind:drake
            on:error={handleError}
            send={cardSend}
            receive={cardReceive}
          />
          {#if i !== sortedRanks.length - 1}
            <div class="spacer my-5 flex-grow-0 flex-shrink-0" />
          {/if}
        {:else}
          <p class="text-center text-secondary">There are no columns!</p>
        {/each}
      </div>
    </div>

    <div
      transition:fade={{ duration: 200 }}
      class="d-block flex-grow-1 d-lg-none scroll"
    >
      <IceBreaker class="w-100" />
      {#each sortedRanks as rank (rank.id)}
        {#if rank.id == $focusedRank}
          <Rank bind:rank on:error={handleError} />
        {/if}
      {:else}
        <p class="text-center text-secondary mt-5">{$_('board.no_columns')}</p>
      {/each}
    </div>

    <div transition:fade={{ duration: 200 }} class="d-lg-none tab-buttons">
      {#if errorAlertVisible}
        <div
          in:fly={{ x: -200, duration: 200 }}
          out:fly={{ x: -200, duration: 200 }}
        >
          <Alert
            data-name="warning-alert"
            class="mb-0 py-1"
            color="warning"
            isOpen={true}
          >
            {$_(errorAlertMessage)}
          </Alert>
        </div>
      {/if}
      {#if connectionLost}
        <div
          in:fly={{ x: -200, duration: 200 }}
          out:fly={{ x: -200, duration: 200 }}
        >
          <Alert
            data-name="error-alert"
            class="mb-0 py-1"
            color="danger"
            isOpen={true}
          >
            {$_('error.connection_lost')}
          </Alert>
        </div>
      {/if}
      <div class="d-flex border-top w-100">
        {#each sortedRanks as rank (rank.id)}
          <div class="flex-grow-1 {tabButtonWidth} px-0">
            <input
              readonly={undefined}
              type="radio"
              id={rank.id}
              bind:group={$focusedRank}
              value={rank.id}
            />
            <label
              for={rank.id}
              class="px-0 border-top text-uppercase {$focusedRank == rank.id
                ? getRankDetails(rank).classes.selected
                : getRankDetails(rank).classes.deselected + ' border-light'}
              col"
            >
              <div class="icon d-inline-block">
                <svelte:component this={getRankDetails(rank).icon} />
              </div>
              <br />
              {$_(rank.name)}
            </label>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <div class="fixed-bottom d-none d-lg-block">
    {#if errorAlertVisible}
      <div
        in:fly={{ y: 100, duration: 200 }}
        out:fly={{ y: 100, duration: 200 }}
      >
        <Alert
          data-name="warning-alert"
          class="mb-0 py-1"
          color="warning"
          isOpen={true}
        >
          {$_(errorAlertMessage)}
        </Alert>
      </div>
    {/if}
    {#if connectionLost}
      <div
        in:fly={{ y: 100, duration: 200 }}
        out:fly={{ y: 100, duration: 200 }}
      >
        <Alert
          data-name="error-alert"
          class="mb-0 py-1"
          color="danger"
          isOpen={true}
        >
          {$_('error.connection_lost')}
        </Alert>
      </div>
    {/if}
  </div>
</div>

<style>
  .scroll {
    overflow: auto;
  }

  .spacer {
    border-right: 0.1em solid #e6e6e6;
  }

  .add-button {
    position: fixed;
    bottom: 1em;
    right: 1em;
    width: 3em;
    height: 3em;
    z-index: 1038;
  }

  .icon {
    width: 1.5em;
    height: 1.5em;
  }

  :global(.svelte-tabs) {
    flex: 1 1 1em;
    display: flex;
    flex-direction: column;
  }

  :global(.svelte-tabs__tab-list) {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  :global(.svelte-tabs li.svelte-tabs__tab) {
    display: table-cell;
    text-align: center;
  }

  input[type='radio'] {
    display: none;
    margin: 10px;
  }

  input[type='radio'] + label {
    display: inline-block;
    flex: 1 1;
    margin: -2px;
    padding: 4px 12px;
    text-align: center;
  }

  .overflow-x-hidden {
    overflow-x: hidden;
  }

  .new-card-form {
    z-index: 1039;
  }

  .tab-buttons {
    z-index: 1040;
  }

  .min-vh-90 {
    min-height: 90vh;
  }

  @media (max-width: 768px) {
    .add-button {
      bottom: 6em;
    }
  }
</style>
