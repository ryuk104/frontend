
<script>
  /*
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

<body>

<header>
    <div class="logo">Uninet</div>
        <nav>
            <ul class="nav_links">
                <li><a href="/support">support</a></li>
                <li><a href="/safety">safety</a></li>
                <li><a href="/download">Download</a></li>
                <li><a class="login-btn" href="/login">Sign In</a></li>
                <li><a class="signup-btn" href="/signup">Sign Up</a></li>
            </ul>
        </nav>
</header>
<hr>    
    





<footer class="footer-box" >
    <div class="footer-infobox">
        <h4>Uninet</h4>
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
</body>

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
  left: 10px;
  padding: 25px 5%;
  width: 100%;
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
  left: auto;
  font-size: 30px;
  font-family:sans-serif ;
  cursor: pointer;
  order:0;
}


.nav_links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-indent: 20px;
  list-style-type: none;


}

.footer-box { 
text-align:center;
display:block ;
background-color:#18191A;
overflow: hidden;
position: absolute;
bottom: 0%;
width: 100%;
}

.footer-infobox {
  float: left;
  width: 400px;
  font-size:40px;
}

.footer-first-row {
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
}

.footer-second-row {
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
  margin:0 40px;
}

.footer-thrid-row {
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
  margin:0 40px;
}

.footer-fourth-row {
  float: left;
  padding: 20px;
  width: 150px;
  font-size:40px;
  margin:0 40px;
}

</style>