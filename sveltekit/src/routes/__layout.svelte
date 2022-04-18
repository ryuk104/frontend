<script>
    import Topnavbutton from "$lib/components/Topnavbutton.svelte";
    import Leftnavbar from "$lib/components/leftnavbar.svelte";
    import Chatchannel from "$lib/components/chatchannel/chatchannel.svelte";
    import CustomeMenu from "$lib/components/customeMenu/CustomeMenu.svelte";
</script>

<Topnavbutton></Topnavbutton>
<Leftnavbar></Leftnavbar>
<Chatchannel></Chatchannel>

<CustomeMenu></CustomeMenu>

    <slot></slot>
