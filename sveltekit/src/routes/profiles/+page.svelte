<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  //   let { BASE_URL } = "djskajhd";
  // 
  //   export async function load({ fetch }) {
  //     const res = await fetch(`${BASE_URL}/api/user?page=0&limit=5`);
  // 
  //     return {
  //       props: {
  //         users: await res.json(),
  //       },
  //     };
  //   }
</script>

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    import { onMount } from "svelte";
    import { Button, Card, Col, Icon, Row, TextField } from "svelte-materialify";
    import { mdiArrowRight, mdiClose, mdiMagnify } from "@mdi/js";
  
    let api;
    let loading;
  
    let searchResults = [];
    onMount(async () => {
      api = await import("$lib/utils/axiosApi");
    });
  
    export let users;
  
    let search = "";
  
    $: usersData = search ? searchResults : users.data.users;
  
    async function handleSearch(e) {
      e.preventDefault();
  
      try {
        loading = true;
        const res = await api.searchUsers(search);
        searchResults = res.data.users;
      } catch (error) {
        console.log(error);
      } finally {
        loading = false;
      }
    }
  
    function removeSearch() {
      searchResults = [];
      search = "";
    }
  </script>
  
  
  <svelte:head>
    <title>Users | Sveltegram</title>
  </svelte:head>