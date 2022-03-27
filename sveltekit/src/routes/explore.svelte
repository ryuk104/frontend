<script>

    import Topnavbutton from "../components/Topnavbutton.svelte";   
    import Leftnavbar from "../components/Leftnavbar.svelte";
    import Chatchannel from "../components/chatchannel/chatchannel.svelte";
    import CustomeMenu from "..//components/customeMenu/CustomeMenu.svelte";

	import { images } from '$lib/stores';

    import { auth } from "$lib/store/auth";
    import { post as postState } from "$lib/store/post";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let api;
    let page = 0;
    let limit = 3;
    let totalPage;
    let loading = false;

    onMount(async () => {
    try {
      loading = true;
      if (!$auth.isAuthenticated) {
        goto("/");
      }
      api = await import("$lib/utils/axiosApi");

      const res = await api.explorePosts({ page, limit });
      if (res.type === "success") {
        totalPage = res.data.pagination.totalPage;
        postState.addPost(res.data.posts);
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  });

  async function loadMore() {
    try {
      loading = true;
      page = page + 1;
      const res = await api.explorePosts({ page, limit });
      if (res.type === "success") {
        postState.addMorePosts(res.data.posts);
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  }
</script>

    <Topnavbutton></Topnavbutton>
    <Leftnavbar></Leftnavbar>
    <Chatchannel></Chatchannel>
    <CustomeMenu></CustomeMenu>



{#if !loading}
  <div style="max-width:1200px ;margin: auto;">
    <Row style="margin:auto">
      <Col sm={12} cols={12} md={8} offset_md={2}>
        <!--  posts -->

        {#each $postState.posts as post (post._id)}
          <div class="mb-8">
            <PostCard {post} />
          </div>
        {/each}

        {#if totalPage >= page + 1}
          <div class="d-flex justify-center">
            <Button on:click={loadMore} class="blue white-text">
              {#if loading}
                <ProgressCircular indeterminate />
              {:else}
                Load More
              {/if}
            </Button>
          </div>
        {/if}
      </Col>
    </Row>
  </div>
{/if}
<div class="grid grid-cols-3 gap-3">
	{#each $images as image (image)}
		<div class="card bordered">
			<figure>
				<img src={image} />
			</figure>
		</div>
	{/each}
</div>
