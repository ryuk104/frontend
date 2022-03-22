<script>
    export let username;
    export let profilepicture;
    export let desc;


  </script>
  
  
  <section class="Textchannelprofile">
    <a class="channelprofile" href="img"> 
        <div class="avatarpicture" role="img"> 
          <img src={profilepicture} class="avatarpicturecircle" width="48px" hieght="48px" alt="d"> 
        </div>
        <div class="friendsusername">{username}</div>
        <div class="desc">{desc}</div>
      </a>
  </section>


<style>
.channelprofile {
  margin-left: 8px;
  display: flex;
  box-sizing: border-box;
  border-radius: 4px;
  outline: 0;
  margin-right: 12px;
  max-width: 224px;
  background-color: var(--gray4);
  height: 48px;
  margin-top: 15px;
  cursor: pointer;
}

.avatarpicture{
  padding-left:10px;
  display: flex;
  position: relative;
  width: 48px;
  height: 48px;
}
</style>
  