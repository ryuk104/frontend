<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  export let money = 0;
</script>

<style>
  .bank {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    font-size: 4vw;
    color: coral;
    background-color: bisque;
    padding: 25px;
    border-radius: 25px;
    display: flex;
    flex-flow: row;
  }
</style>

<div class="bank">
  <div>
    {money}
  </div>
</div>
