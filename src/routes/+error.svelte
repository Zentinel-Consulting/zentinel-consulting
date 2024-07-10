<script>
  import WindowsLane from "../components/WindowsLane.svelte";
</script>


<div class="landing">
  <div class="windows-main-container">
    <WindowsLane />
    <div class="label-lane">
      <div
        class="label-container"
      >
        <p class="main-label">404.</p>
        <p class="second-label">Hello there! You seem lost mate.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .landing {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background-color: black;
    color: white;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .windows-main-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .label-lane {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    height: 100%;
  }
  .label-container {
    width: 45%;
  }
  .main-label {
    font-family: "Times New Roman", Times, serif;
    font-size: 200px;
    margin: 0;
    padding: 0;
  }
  .second-label {
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
  }

  @media only screen and (max-width: 1100px){
    .windows-main-container {
      flex-direction: column;
    }
    .label-lane {
      width: 100%;
      height: 15%;
      align-items: start;
      padding-left: 20px;
    }
    .label-container {
    }
    .main-label {
      font-size: 60px;
    }
    .second-label {
      font-size: 15px;
    }
  }
  @media only screen and (max-height: 1100px){
  }
@media screen and (max-width: 1100px), 
       screen and (max-height: 430px) {
    .label-lane {
      height: 25%;
    }
}
</style>
