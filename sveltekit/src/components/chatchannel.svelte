<script>
const fetchusers = async () => {
        const login = await fetch("http://localhost:8080/api/user/getusers", {
            method: "GET",
            mode: 'cors',
            cache: "default",
            credentials: "same-origin",
            referrerPolicy: 'no-referrer', 
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            },
        });
    }

</script>


<nav class="chatchaneel">
    <div>

      <div>
        <form on:click="d.com">
          <input type="text" class="searchbar" placeholder="search people" name="search">
          
        </form>
      </div>

      <hr>

      <div class="quickacessheadspacearea"></div>
      <div class="quickacess"> 

      <a class="channelprofile" href="http://"> 
        <div class="avatarpicture" role="img"> 
          <img src=../static/image/image1.jpeg class="avatarpicturecircle" width="48px" hieght="48px" alt="d"> 
        </div>
        <div class="friendsusername">Home</div>
      </a>

      <a class="channelprofile" href="d" onclick="document.location.href='/message';"> 
        <div class="avatarpicture" role="img"> 
          <img src=../static/icon/homeicon.svg class="avatarpicturecircle" width="48px" hieght="48px" alt="d"> 
        </div>
        <div class="friendsusername">Message</div>
      </a>

      <button class="channelprofile" type="button">
        create post
      </button>

      <hr>
      </div>

      <a class="channelprofile" href="img"> 
        <div class="avatarpicture" role="img"> 
          <img src=../static/image/image1.jpeg class="avatarpicturecircle" width="48px" hieght="48px" alt="d"> 
        </div>
        <div class="friendsusername">Quax</div>
      </a>

      <a class="channelprofile" href="s"> 
        <div class="avatarpicture" role="img"> 
          <img src=../static/image/image1.jpeg class="avatarpicturecircle" width="45px" hieght="45px" alt="d"> 
        </div>
        <div class="friendsusername">Quax</div>
      </a>

    </div>
  </nav>

<style>
.chatchaneel {
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  box-sizing: border-box;
  /* background-color: #2d3436; */
  /* background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%); */
  background-color: #383F51;
  max-width: 225px;
  position: fixed;
  transform: translate(32%, 0%);
  height: 100%;
  width: 225px;
  overflow-y: hidden;
  float: left;
}

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

.searchbar{
    position: relative;
    width: 200px;
    height: 28px;
    top: 20px;
    left: 10px;
    border-radius: 8px;
    top: 3px;
}


</style>