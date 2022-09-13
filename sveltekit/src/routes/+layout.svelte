<script>
    import Topnavbutton from "$lib/components/Topnavbutton.svelte";
    import Leftnavbar from "$lib/components/leftnavbar.svelte";
    import Chatchannel from "$lib/components/chatchannel/chatchannel.svelte";
    import CustomeMenu from "$lib/components/customeMenu/CustomeMenu.svelte";
    import Guild from "$lib/components/guild.svelte";

</script>

<!--<Topnavbutton></Topnavbutton>-->
<!--<Leftnavbar></Leftnavbar>-->
<Chatchannel></Chatchannel>
<Guild/>
<CustomeMenu></CustomeMenu>

<slot></slot>
