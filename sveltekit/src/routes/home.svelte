<script context="module">
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


    import Topnavbutton from "../components/Topnavbutton.svelte";
    import Leftnavbar from "../components/Leftnavbar.svelte";
    import Chatchannel from "../components/chatchannel/chatchannel.svelte";
    import CustomeMenu from "..//components/customeMenu/CustomeMenu.svelte";
    import Instagram from "../components/posts/instagram.svelte";
    import Friendsactivity from "../components/friendsactivity/friendsactivity.svelte";
    import Stories from "../components/stories/stories.svelte";
    import ModalOne from '../components/ModalOne.svelte';
    import "../app.css";



    let showModal = false;

    import Modal from '../components/Modal.svelte'
	
	  let selection

    function setSelection(res){
		selection=res
	  }

    
</script>







<head lang="en" dir="ltr" > 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<div class="body-css" style="background-color: #424242;">

  <Topnavbutton></Topnavbutton>
  <Leftnavbar></Leftnavbar>
  <Chatchannel></Chatchannel>
  <CustomeMenu></CustomeMenu>
  <Stories></Stories>
  <Friendsactivity></Friendsactivity>
  <Instagram></Instagram>

    <div class="leftbarbuttonpfpclick">
        <div>
        </div>
    </div>
    
    <slot name="trigger">
      <!-- fallback trigger -->
      <button>Open Modal</button>
    </slot>
    <div class="modal">
        <div class="backdrop" />
    
        <div class="content-wrapper">
          <slot name="header">
            <!-- fallback -->
            <div>
              <h1>Your Modal Heading Goes Here...</h1>
            </div>
          </slot>
    
          <div class="content">
            <slot name="content" />
          </div>
    
          <slot name="footer">
            <!-- fallback -->
            <div>
              <h1>Your Modal Footer Goes Here...</h1>
            </div>
          </slot>
        </div>
      </div>

    
    <div>
      <button class="notificationbutton">
        NOTIFICATION
      </button>
    </div>

    
    
</div>

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












