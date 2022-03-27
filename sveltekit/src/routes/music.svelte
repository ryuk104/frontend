<script>
    import Topnavbutton from "../components/Topnavbutton.svelte";
    import Leftnavbar from "../components/Leftnavbar.svelte";
    import Chatchannel from "../components/chatchannel/chatchannel.svelte";
    import CustomeMenu from "..//components/customeMenu/CustomeMenu.svelte";

    let playlistname;
</script>

<div>
    <Topnavbutton></Topnavbutton>
    <Leftnavbar></Leftnavbar>
    <Chatchannel></Chatchannel>
    <CustomeMenu></CustomeMenu>

<ul class="playlists-list"> 
    <div class="playlistprofile">
        {playlistname}
    </div>
</ul>



</div>

<style>

    .playlists-list{
        display:grid;
    }

    .playlistprofile{
        background: #18191A;
        margin: 0;
        padding: 0;
        height: 200px;
        width: 40%;
    }
</style>