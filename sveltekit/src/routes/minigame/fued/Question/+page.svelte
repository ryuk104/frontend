

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  export let question;
</script>

<style>
  .question {
    text-align: center;
    margin-top: 20px;
    font-size: 2.5vw;
    background-color: lightblue;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 60px;
    display: flex;
    flex-flow: row;
  }
</style>

<div class="question">
  <p>
    {question}
  </p>
</div>
