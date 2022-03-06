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

  



    import Topnavbutton from "../components/Topnavbutton.svelte";
    import Leftnavbar from "../components/Leftnavbar.svelte";
    import Chatchannel from "..//components/chatchannel.svelte"

    
</script>



<Topnavbutton></Topnavbutton>
<Leftnavbar></Leftnavbar>
<Chatchannel></Chatchannel>

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
        <div class="stories">
          <div>
            <ul class="storiesul"> 
              <li class="storycontent" >
                <button class="storeisbutton">
                  <div>
                    <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture">
                  </div>
                  <div>Quax</div>
                </button>
              </li>
    
              <li class="storycontent" >
                <button class="storeisbutton">
                  <div>
                    <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture">
                  </div>
                  <div>Quax</div>
                </button>
              </li>
              
              <li class="storycontent" > <button class="storeisbutton"> <div> <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture"> </div> <div>Quax</div> </button> </li>
    
              <li class="storycontent" > <button class="storeisbutton"> <div> <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture"> </div> <div>Quax</div> </button> </li>
    
              <li class="storycontent" > <button class="storeisbutton"> <div> <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture"> </div> <div>Quax</div> </button> </li>
    
              <li class="storycontent" > <button class="storeisbutton"> <div> <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture"> </div> <div>Quax</div> </button> </li>
    
              <li class="storycontent" > <button class="storeisbutton"> <div> <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture"> </div> <div>Quax</div> </button> </li>
    
    
              <li class="storycontent" >
                <button class="storeisbutton">
                  <div>
                    <img src="../static/image/image1.jpeg" width="56px" height="56px" class="storyprofilepicture">
                  </div>
                  <div>Quax</div>
                </button>
            </li>
        </ul>
    </div>
</div>
        


<div class="instagramg" id="instagramg">
    <article> <img class="instapics" src="../static/image/image1.jpeg" wdith="400" height="400"> </article>
    <article> <img class="instapics" src="../static/image/image2.png" wdith="400" height="400"> </article>
    <article> <img class="instapics" src="../static/image/image3.jpeg" wdith="400" height="400"> </article>
    <article> <img class="instapics" src="../static/image/image4.jpeg" wdith="400" height="400"> </article>
    <article> <img class="instapics" src="../static/image/image5.jpeg" wdith="400" height="400"> </article>
    <article> <img class="instapics" src="../static/image/image6.jpeg" wdith="400" height="400"> </article>
    <article> <img class="instapics" src="../static/image/image1.jpeg" wdith="400" height="400"> </article>
</div>

<div >
  <ul class="friendsactivivtylist">
    <li class="friendactivivty"><img class="firendactvitypfp" src="../static/image/image1.jpeg">quax</li>

    <li class="friendactivivty"><img class="firendactvitypfp" src="../static/image/image1.jpeg">quax Playing fortnite</li>
    <li class="friendactivivty"><img class="firendactvitypfp" src="../static/image/image1.jpeg">quax</li>
    <li class="friendactivivty"><img class="firendactvitypfp" src="../static/image/image1.jpeg">quax Playing among us</li>

  </ul>
</div>
        
      

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

.friendsactivivtylist{
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 16px 0;
  height: 380px;
  width: 300px;
  outline: 0;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  display: list-item;
  position: absolute;
  top: 40%;
  left: 80%;
  border-radius: 20px;

}

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

.firendactvitypfp{
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
  width: 50px;
  border-radius: 40px;
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












