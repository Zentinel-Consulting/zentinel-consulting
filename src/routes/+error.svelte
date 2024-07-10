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
</style>
