<script>
    import Imagetone from "$lib/components/imgeditor/imagetone.svelte"
    import Imagecrop from "$lib/components/imgeditor/imagecrop.svelte"

    let crop = { x: 0, y: 0 }
	let zoom = 1
	let image  // so we can change the image from our tests

</script>

<Imagecrop 
    {image}
	bind:crop
	bind:zoom
	on:cropcomplete={e => console.log(e.detail)}
/>

<Imagetone
    src="./assets/image.jpg"
    alt="processed image"
    colours="{['#ff00ff', '#ffff00']}"
    amplitude="1.1"
    exponent="1.3" 
/>
