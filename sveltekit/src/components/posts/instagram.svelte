<script>
  import Postsprofile from './postsprofile.svelte'
  import { postsData } from '../../testdb/posts.js';		 

</script>





<div class="instagramg" id="instagramg">
  {#each postsData as {image}}          
    <Postsprofile {image} />
  {/each}

    
    <article> <img class="instapics" src="../static/image/image5.jpeg" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image6.jpeg" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image1.jpeg" wdith="400" height="400" alt="gram"> </article>
</div>

<style>
.instagramg {
  text-align:center;
  display:grid;
  justify-items: center;
  grid-row-gap: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -5%);
  overflow-y:scroll;
  overflow-x: hidden;
}

</style>