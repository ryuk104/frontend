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
    import Leftnavbar from "../components/Leftnavbar.svelte"
</script>

<Topnavbutton></Topnavbutton>
<Leftnavbar></Leftnavbar>

<head lang="en" dir="ltr" > 
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>


<body class="body-css" style="background-color: #424242;" id="thebody">

    <div class="leftbarbuttonpfpclick">
        <div>
    
        </div>
    </div>
    
    
    <nav class="chatchaneel">
        <div>
          <div class="quickacessheadspacearea"></div>
          <div class="quickacess"> 
    
          <a class="channelprofile"> 
            <div class="avatarpicture" role="img"> 
              <img src=../static/image/image1.jpeg class="avatarpicturecircle" width="48px" hieght="48px" > 
            </div>
            <div class="friendsusername">Home</div>
          </a>
    
          <a class="channelprofile" onclick="document.location.href='/message';"> 
            <div class="avatarpicture" role="img"> 
              <img src=../static/image/image1.jpeg class="avatarpicturecircle" width="48px" hieght="48px" > 
            </div>
            <div class="friendsusername">Message</div>
          </a>
    
          <button class="channelprofile" type="button">
            create tweet
          </button>
    
          <hr>
          </div>
    
          <a class="channelprofile"> 
            <div class="avatarpicture" role="img"> 
              <img src=../static/image/image1.jpeg class="avatarpicturecircle" width="48px" hieght="48px" > 
            </div>
            <div class="friendsusername">Quax</div>
          </a>
    
          <a class="channelprofile"> 
            <div class="avatarpicture" role="img"> 
              <img src=../static/image/image1.jpeg class="avatarpicturecircle" width="45px" hieght="45px" > 
            </div>
            <div class="friendsusername">Quax</div>
          </a>
    
        </div>
      </nav>
    
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
  transform: translate(-100%, -5%);
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
</style>












