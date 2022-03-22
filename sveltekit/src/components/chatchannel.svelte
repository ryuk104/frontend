<script>
import { bookData } from '../testdb/User.js';		 
import Userprofile from './searchbar/userprofile.svelte';
import NoResults from './searchbar/userprofile.svelte';

let searchTerm = "";
let filteredBooks = [];


const searchBooks = () => {	
		return filteredBooks = bookData.filter(Userprofile => {
			let username = Userprofile.username.toLowerCase();
			return username.includes(searchTerm.toLowerCase())
		});
}

// search bar
let searchbar = "";

function sendData(e){
  let searchResults = ("searchResults");
  let searchmatch = e.value.match(/^[a-zA-Z ]*/);
  let searchmatch2 = e.value.match(/\s*/);

  if (match2[0] === e.value){
    searchResults.innerHTML = "";
    return;
  }
  if (match[0] === e.value){
    fetch('getSearch', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: e.target.value})
  }).then(res => res.json()).then(data => {
    let payload = data.payload;
    searchResults.innerHTML = "";
    if(payload.length < 1){
      searchResults.innerHTML = "No results found";
      return;
    }
    payload.forEach((item, index) => {
      if(index > 0) searchResults.innerHTML += "<hr>";
      searchResults.innerHTML += `<a href="/profile/${item.id}">${item.name}</a>`;
    })
  });
  return;
  }
  searchResults.innerHTML = '';
}


//usermetadata
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

function openbookshelf() {
    const bookshelfs = document.querySelector('bookshelf');
		bookshelfs.classList.toggle("show");
};

</script>


<nav class="chatchaneel">
    <div>
      <section id="query-section">
        <div id="search-input-cont">
        <input type="text" 
               id="search-field" 
               placeholder="Search" 
               autocomplete="off"
               bind:value={searchTerm}
               on:input={searchBooks} />
        </div> 
      </section>

      <button on:click={openbookshelf}>
        dasds
      </button>

<main id="bookshelf">
        {#if searchTerm && filteredBooks.length === 0}
          <NoResults />		
        {:else if filteredBooks.length > 0}
          {#each filteredBooks as {username, profilepicture, desc}}
            <Userprofile {username} 
                  {profilepicture} 
                  {desc}
                  />
          {/each}	
        {:else}
          {#each bookData as {username, profilepicture, desc}}
                  <Userprofile {username} 
                  {profilepicture} 
                  {desc}
                   />
          {/each}	
        {/if}
</main>	
      

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

#search-input-cont {
		width: 100%;
    height: 80%;
		display: flex;
		align-items: center;
		margin: 0 0 0 10px;
	}

	#search-field {
		width: 100%;
		font-size: 1.3rem;
		border: 1px solid gray;
		border-radius: 5px;
		padding: 8px;
		margin: 0 10px 0;
	}
	* {
		box-sizing: border-box;
	}
	
	#query-section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2% 0;
	}
	
	/* General Structure */


main#bookshelf{
	width: 100%;
	margin: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center; 
}

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