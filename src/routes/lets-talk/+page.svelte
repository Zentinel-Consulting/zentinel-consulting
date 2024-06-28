<script>
  import StepperLetsTalk from "../../components/StepperLetsTalk.svelte";
</script>

<div
 class="main-content"
>
  <div
    class="placeholder-container"
  >
  </div>
  <div
    class="form-container"
  >
    <div
      class="form-holder" 
    >
      <StepperLetsTalk/> 
    </div>
  </div>
</div>

<style>
  .main-content {
    display: flex;
    flex-direction: row;

    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }
  .placeholder-container {
    width: 40%;
    height: 100%;
    background-color: black;
  }
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    background-color: white;
  }
  .form-holder {
    height: 80%;
    width: 60%;
    background-color: gray;
  }
</style>
