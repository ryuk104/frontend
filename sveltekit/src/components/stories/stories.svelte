<script>
  import Storyprofile from './storyprofile.svelte'
  import { storyData } from '../../testdb/story.js';		 
</script>


<div class="stories">
    <div>
      <ul class="storiesul"> 
        {#each storyData as {profilepicuture, username}}          
          <Storyprofile {profilepicuture} {username}/>
        {/each}
  </ul>
</div>
</div>

<style>
.stories {
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 16px 0;
  height: 75px;
  width: 800px;
  outline: 0;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  display: list-item;
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-70%, -350%);
} 

.storyprofilepicture {
  border-radius: 100px;
  width: 56px; 
  height: 56px;
}

.storycontent {
  display: flex;
  transform: translatex(10px);
  flex-direction: row;
  width: 10px;
  display: list-item;
  display: block;
}

.storiesul{
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  display:flex;
  flex-flow:row;
  justify-content:space-between;
}

.storeisbutton{
  align-items: center;
  align-self: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
  padding-top: 0;
  text-align: center;
  width: 64px;
}
</style>