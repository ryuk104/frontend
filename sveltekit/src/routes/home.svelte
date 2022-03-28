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

    let showModal = false;
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


    

    
    <div>
      <button class="notificationbutton">
        NOTIFICATION
      </button>
    </div>

    <div class="flex justify-center align-middle items-center">
      <div class="flex  flex-col justify-center align-middle items-center p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600">
        <h2 class="font-bold text-center align-middle text-gray-800  dark:text-gray-200 m-1">Modal Dialog</h2>
        <button
          on:click={() => (showModal = true)}
          class="m-2 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-500 shadow-sm px-5 py-3 bg-purple-500 dark:bg-purple-400 text-base font-medium text-white hover:bg-purple-700  dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-purple-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm capitalize"
        >
          show modal
        </button>
        {#if showModal}
          <ModalOne on:close={() => (showModal = false)} />
        {/if}
      </div>
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












