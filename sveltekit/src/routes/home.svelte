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

export const load = async ({ session }) => {};

    import Topnavbutton from "../components/Topnavbutton.svelte";
    import Leftnavbar from "../components/Leftnavbar.svelte";
    import Chatchannel from "../components/chatchannel.svelte";
    import CustomeMenu from "..//components/customeMenu/CustomeMenu.svelte";
    import Instagram from "..//components/instagram.svelte";
    import Friendsactivity from "../components/friendsactivity.svelte";
    import Stories from "../components/stories.svelte";


    
</script>



<Topnavbutton></Topnavbutton>
<Leftnavbar></Leftnavbar>
<Chatchannel></Chatchannel>
<CustomeMenu></CustomeMenu>


<head lang="en" dir="ltr" > 
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>


<body class="body-css" style="background-color: #424242;" id="thebody">

    <div class="leftbarbuttonpfpclick">
        <div>
    
        </div>
    </div>
    
    <div>
      <button class="notificationbutton">
        NOTIFICATION
      </button>
    </div>
    
    
  <main class="maincontent" >
    <Stories></Stories>
    <Friendsactivity></Friendsactivity>
    <Instagram></Instagram>
  </main>
</body>


<style>
body{
  background: #18191A !important;
  margin: 0;
  padding: 0;
  color: var(--text);
  background: var(--bg);
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
}
.message-container {
  place-items: center;
  
}

.message-input {
  border-radius: 20px;
  height: 50px;
  width: 90%;
  font-size: 18px;
  outline: none;
}

.send-button {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  outline: none;
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












