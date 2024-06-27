<script>
  // You can add any JavaScript you need here
</script>

<div class="main-container">
  <div class="zebra-container">
    <div class="footer-content">
      <div class="content-left">
        <!-- social network list -->
        <!-- zentiel c 2024 -->
      </div>
      <div class="content-right">
        <div class="newsletter">
          <div class="newsletter-content">
            <p>Newsletter. Sign up to stay up to date</p>
            <div class="newsletter-inputs">
              <input type="email" name="email">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="zebra-lines">
      <!-- Generate the zebra lines using CSS -->
      {#each Array(30) as _, i}
        <div class="zebra-line" style="height: {2 + i}px; width: {100 - i * 2}%;"></div>
      {/each}
    </div>
  </div>
</div>

<style>
  .main-container {
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .zebra-container {
    background-color: black;
    position: relative;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: white;
  }
  .newsletter {
    display: flex;
    flex-direction: column;
  }
  .newsletter-inputs {
    display: flex;
  }
  .newsletter-inputs input {
    margin-right: 10px;
  }
  .zebra-lines {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .zebra-line {
    background-color: white;
    margin-bottom: 2px;
  }
</style>

