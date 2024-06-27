<script>
  // Define the number of lines
  let lines = Array(40).fill(0);
</script>

<div class="main-container">
  <div class="footer-content"></div>
  <div class="zebra-container">
    {#each lines as _, index}
      <div
        class="zebra-line"
        style="--margin: {(40 - index) * 0.04}%; --height: {index * 0.04}%;"
      ></div>
    {/each}
  </div>
</div>

<style>
  .main-container {
    background-color: white;
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
  }
  .footer-content {
    width: 100%;
    height: 30%;
    background-color: black;
  }
  .zebra-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 70%;
    background-color: white;
  }
  .zebra-line {
    background-color: black;
    width: 100%;
    height: var(--margin);
    margin-top: var(--height);
  }
</style>

