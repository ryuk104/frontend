<script>
    //Don't know if we can handle date here, to print today, yesterday etc in chat.
import ChatInput from "./ChatInput.svelte";

</script>



<!--This is just a wrapper that takes nested components-->
<div class="window">
    <slot></slot>
</div>

<style>

    .window {
        margin-right: 85px;
        box-sizing: border-box;
        background-color: #202020;
        width: 100%;
        overflow: scroll;
        z-index: 3;
        margin-bottom: 10%;
    }

    .window::-webkit-scrollbar {
    display: none;
    }

</style>
