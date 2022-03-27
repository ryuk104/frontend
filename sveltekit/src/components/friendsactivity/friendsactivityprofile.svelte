<script>
    export let username;
    export let profilepicuture;

</script>

<section class="friendsactivity"> 
    <li class="friendactivivty"><img class="firendactvitypfp" src="{profilepicuture}" height="48px" width="48px" alt="gram">
        {username}
    </li>

</section>


<style>
.friendactivivty{
  align-items: center;
  align-self: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding-bottom: 0;
  padding-top: 0;
  text-align: center;
  width: 64px;
}
	
</style>