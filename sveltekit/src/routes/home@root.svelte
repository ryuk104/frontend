<script>
  /*
  if (!request.session || !request.sessionID || !request.session.user || !request.cookies.sid) {
      const err = new Error("unatuh");
      err.statusCode = 401;
      res.redirect('/login')
  } else {
   res.redirect('/home') 
  };

console.log(req.sessionID)
*/

//export const load = async ({ session }) => {};


    
    import CustomeMenu from "$lib/components/customeMenu/CustomeMenu.svelte";
    import Instagram from "$lib/components/posts/instagram.svelte";
    import Friendsactivity from "$lib/components/friendsactivity/friendsactivity.svelte";
    import Stories from "$lib/components/stories/stories.svelte";
    import Modal from '$lib/components/Modal.svelte'
    
    import Postbuttonpopup from '$lib/components/postbuttonpopup.svelte'

    import "../app.css";

    
    
</script>
  <Postbuttonpopup></Postbuttonpopup>
  
  
  <CustomeMenu></CustomeMenu>
  <Stories></Stories>
  <Friendsactivity></Friendsactivity>
  <Instagram></Instagram>



<svelte:head> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<section>

  

    <div class="leftbarbuttonpfpclick">
        <div>
        </div>
    </div>
    
    
    <div>
      <button class="notificationbutton">
        NOTIFICATION
      </button>
    </div>

    
</section>

<style>
.body-css{
  background: #18191A !important;
  margin: 0;
  padding: 0;
  color: var(--text);
  background: var(--bg);
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
}

main {
  margin-left: 5rem;
}

.notificationbutton{
  background-color: rgba(0,0,0,.7);
  border-radius: 23px;
  height: 42px;
  min-width: 20px;
  position: fixed;
  border: 0;
  cursor: pointer;
  color: #fff;
  float: right;
  display: flex;
  align-items: center;
  top: 30px;
  right: 205px;
  z-index: 1;
}
</style>












