<script>
    export let serverimage;
</script>


<section class="Serverprofile">
	<div class="servers">
        <div>
            <div draggable="true" class="serverpicturebutton">
                <img src={serverimage} width="48px" hieght="48px" alt="logo">
            </div>
            <div draggable="true" class="serverpicturebutton">
          </div>
        </div>
    </div>
</section>


<style>
	
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

.settingbutton {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 780%;
}
	
</style>