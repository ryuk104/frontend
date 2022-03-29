<script>
  import Postsprofile from './postsprofile.svelte'
  import { postsData } from '../../testdb/posts.js';		 

</script>





<div class="instagramg" id="instagramg">
  {#each postsData as {image, profilepicture, username, comments, desc}}          
    <Postsprofile {image} {profilepicture} {username} {desc} {comments}/>
  {/each}

    
</div>

<style>
.instagramg {
  text-align:center;
  z-index: -1;
  display:grid;
  justify-items: center;
  grid-row-gap: 80px;
  position: absolute;
  top: 40%;
  left: 35%;
  width: 50%;
  height: 100%;
  transform: translate(-20%, -5%);
  overflow-y:scroll;
  overflow-x: hidden;
  background-color: rgb(37, 29, 29);
}

</style>