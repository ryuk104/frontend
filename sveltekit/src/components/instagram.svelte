<div class="instagramg" id="instagramg">
    <article> <img class="instapics" src="../static/image/image1.jpeg" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image2.png" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image3.jpeg" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image4.jpeg" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image5.jpeg" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image6.jpeg" wdith="400" height="400" alt="gram"> </article>
    <article> <img class="instapics" src="../static/image/image1.jpeg" wdith="400" height="400" alt="gram"> </article>
</div>

<style>
    .instagramg {
  text-align:center;
  display:grid;
  justify-items: center;
  grid-row-gap: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -5%);
  overflow-y:scroll;
  overflow-x: hidden;
}

.instapics {
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 16px 0;
  outline: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  display: table-row;
  width: 400px;
  height: 400px;
}
</style>