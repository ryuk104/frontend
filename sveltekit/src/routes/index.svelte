<script context="module">
    export async function load({session}) {
        if(!session.authenticated) {
            return {
                status: 401,
                body: "Unauthorized"
            }
        }
        return {
            props: {
                email: session.email,
                password: session.password
            }
        }
    }

    export let email
    let  username

/*    onMount(async () => {
        const res = await fetch('/user')
        const user = await res.json()
        username = user.username
    })
*/


</script>
<svelte:head>
    <title>UNIVERSE</title>
</svelte:head>
  

<h1>Welcome to SvelteKit</h1>
<p> hello {username} </p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<header>
    <div class="logo">Quax</div>
        <nav>
            <ul class="nav_links">
                <li><a href="support.html">support</a></li>
                <li><a href="login_page/safety">safety</a></li>
                <li><a href="login_page/downloadpage.html">Download</a></li>
                <li><a class="login-btn" href="login2.html">Sign In</a></li>
                <li><a class="signup-btn" href="signup.html">Sign Up</a></li>
            </ul>
        </nav>
</header>
<hr>    
    





<footer class="footer-box" >
    <div class="footer-infobox">
        <h4 style="padding:10px">Quax</h4>
        <a href="https://twitter.com/Quax_duck" target=blank><img src="twitter.png" width="45px" height="45px" alt="logo"></a>
        <a href="https://www.instagram.com/quax.duck/" target=blank><img src="insta.png" width="45px" height="45px" alt="logo"></a>
    </div>
    <div class="footer-info">
        <div class="footer-first-row">
            <a href=" ">Download</a>
            <a href=" ">Why Quax</a>
            <a href=" ">Inspiration</a>
         </div>

         <div class="footer-second-row">
            <a href=" ">About</a>
            <a href=" ">Company</a>
            <a href=" ">Licenses</a>
         </div>

         <div class="footer-thrid-row">
            <a href=" ">Help</a>
            <a href=" ">Support</a>
            <a href=" ">Safety</a>
            <a href=" ">Security</a>
            <a href=" ">Privacy</a>
            <a href=" ">Guidelines</a>
            <a href=" ">Terms</a>
         </div>

        <div class="footer-fourth-row">
                <a href=" ">Community</a>
        </div>
   </div>
</footer>


<style>
    *{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  background-color: #272727;
  
}

li, a, button {
  font-family: "montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 5%;
}
.signup-btn{
  padding: 0px 15px;
  border-radius: 20px;
  background-color: lightslategray;
  font-size: 30px;
  color: #272727;
}
.login-btn{
  padding: 0px 15px;
  right: auto;
  border: blue;
  border-radius: 20px;
  background-color: lightslategray;
  font-size: 30px;
  color: #272727;
  border-spacing: 50px;
}
.logo {
  padding-right: 50%;
  left: auto;
  font-size: 30px;
  font-family:sans-serif ;
  cursor: pointer;
  order:0;
  margin-left: auto;
}




.footer-box { 
text-align:center;
display:block ;
background-color:lightblue;
overflow: hidden;
position: absolute;
bottom: 0px;
width: 100%;
}

.footer-infobox {
  border:10px;
  float: left;
  padding: 12px;
  width: 400px;
  font-size:40px;
  margin-left: 200px;
}

.footer-first-row {
  border:10px;
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
  margin:0 40px;
}

.footer-second-row {
  border:10px;
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
  margin:0 40px;
}

.footer-thrid-row {
  border:10px;
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
  margin:0 40px;
}

.footer-fourth-row {
  border:10px;
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
  margin:0 40px;
}

</style>