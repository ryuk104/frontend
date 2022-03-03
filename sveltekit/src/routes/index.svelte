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
