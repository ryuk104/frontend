<script>
    export let username;
    export let image;
    export let desc;
    export let comments;
    export let likes;

</script>

<section class="Postsprofile"> 
    <article > 
        <div class="username">{username}</div>
        <img class="instapics" src="{image}" wdith="400" height="400" alt="pic">
        <div class="desc">{desc}</div>
        <div class="comments">{comments}</div>
        <button class="like">{likes}</button>
    </article>
</section>


<style>
.instapics {
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 16px 0;
  outline: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  display: table-row;
  width: 400px;
  height: 400px;
}
	
</style>