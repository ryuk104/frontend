

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  export let money = 0;
</script>

<style>
  .team {
    font-size: 4vw;
    color: coral;
    background-color: bisque;
    padding: 25px;
    border-radius: 25px;
    display: flex;
    flex-flow: row;
  }
</style>

<div class="team">
  {money}
</div>
