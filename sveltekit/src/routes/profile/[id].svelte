<script context="module">
    /*
    export async function load({ page, fetch }) {
      try {
        const { userId } = page.params;
        const res = await fetch(`${BASE_URL}/api/user/${userId}`);
  
        const data = await res.json();
  
        return {
          props: {
            user: data.data.user,
            posts: data.data.posts,
          },
        };
      } catch (error) {
        console.log(error);
      }
    }
    */

    import { bookData } from '../../testdb/user.js';
    const { id } = bookData.uid;		 

  </script>
  
  <script>
    import { onMount } from "svelte";
    import Instagram from "../../components/posts/instagram.svelte";
    import { BASE_URL } from "$lib/config";
    import { auth } from "$lib/store/auth";
  
    export let username;
    export let posts;
  
    
  

  </script>
  
  <svelte:head>
    <title>{bookData.username} | Sveltegram</title>
  </svelte:head>
  <div style="max-width:1200px ;margin: auto;">
    <div style="margin:auto ">
      
    </div>
  </div>
  