<script>
  import Tchat from "$lib/components/server/Tchat.svelte";
  import { page } from '$app/stores'

  const { id } = page.params;
  export let params = {};
</script>

<style>
  .root {
    padding: 80px 0;
  }
</style>

<div class="root">
  <Tchat channelId={params.id} />
</div>
