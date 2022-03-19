<script>
  import Setting from './/setting/setting.svelte'



</script>




<nav class="leftnavbar">
    <ul class="serverlist">
      <img src=./static/image/logo2.png width="48px" hieght="48px" alt="logo">
        <div class="leftnavbarsymbols" >
          
        </div>
  
        <div class="servers">
          <div>
            <div draggable="true" class="serverpicturebutton">
              <img src=./static/image/image1.jpeg width="48px" hieght="48px" alt="logo">
            </div>
  
            <div draggable="true" class="serverpicturebutton">
            </div>
          </div>
        </div>
    </ul>
  
    <div class="leftbarbuttonpfpclick">
      <div>
  
      </div>
  </div>


    <Setting>
    <div class="settingbutton">
      <img src=./static/image/image1.jpeg width="48px" hieght="48px" alt="logo">
    </div>
    </Setting>
</nav>
  
<style>
/* leftnavbar */
.leftnavbar {
  margin: 0;
  padding: 0;
  background: #1a4b4e;
  height: 100%;
  align-items: center;
  position: fixed;
  width: 72px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: visible;
  float: left;
}

.leftnavbarsymbols {
  text-align:center;
  display:grid;
  justify-items: center;
  grid-row-gap: 80px;
  padding-right: 40px;
  cursor: pointer;
  bottom: 10px;
}

.serverpicture{
  margin: 0 0 8px;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 100%;
  text-align:center;
  grid-row-gap: 80px;
  margin-bottom: 15px;
}

.serverpicturebutton{
cursor: pointer;
}

.serverlist {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  
}

</style>
  
  
  
    