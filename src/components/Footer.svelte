<script>
  // Define the number of lines
  let lines = Array(40).fill(0);

  // Custom easing function
  function easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // Function to scroll to top with custom easing
  function scrollToTop() {
    const duration = 1000; // Duration of scroll in milliseconds
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = easeInOutCubic(time);
      
      window.scrollTo(0, Math.ceil((1 - timeFunction) * start));

      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  }
</script>


<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>



<div class="main-container">
  <div class="footer-content">
    <div
      class="upper-content"
    >
      <div
        class="upper-content-container left-content"
      >
        <div
          class="upper-content-middle-box"
        >
          <a
            class="upward-button"
            href="#"
            on:click|preventDefault={scrollToTop}
          >
            <p>Back to Top</p>
            <span class="material-symbols-outlined">
              arrow_upward
            </span>
          </a>
        </div>
      </div>
      <div
        class="upper-content-container right-content"
      >
        <div
          class="upper-content-middle-box upper-content-middle-box-left"
        >
          <div
            class="newsletter-container"
          >
            <div
              class="newsletter-content"
            >
              <p
                class="newsletter-label"
              >
                <span>Newsletter.</span> Sign up to stay up to date.
              </p>
              <div
                class="input-field-container"
              >
                <input type="email" id="email" name="email" placeholder="Email">
                <button><span class="material-symbols-outlined">north_east</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="lower-content"
    >
      <div
        class="upper-content-container left-content"
      >
        <div
          class="upper-content-middle-box"
        >
          <div
            class="socialn-list"
          >
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div
        class="upper-content-container"
      >
        <div
          class="upper-content-middle-box"
        >
          <div
            class="label-co"
          >
            <p>Zentinel <span class="material-symbols-outlined">copyright</span> 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>




  <!-- Zebra design -->
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    background-color: black;
  }
  .upper-content {
    display: flex;
    flex-direction: row;
    width: 100%; 
    height: 85%;
  }
  .upper-content-container {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .upper-content-middle-box {
    width: 97%; 
    height: 80%;
  }
  .left-content {
    justify-content: end;
  }
  .upward-button {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .upward-button p{
    font-size: 35px;
    margin: 0;
    padding: 0;
    padding-right: 15px;
  }
  .upward-button{
    text-decoration:none;
    color: white;
  }
  .right-content {
  }
  .upper-content-middle-box-left {
    display: flex;
    justify-content: end;
  }
  .newsletter-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 50%;
    background-color: white;
    border-radius: 10px;
  }
  .newsletter-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;  
    height: 90%;
    color: black;
  }
  .newsletter-label span {
    font-weight: bold;
  }
  .input-field-container {
    width: 100%;
    height: 30%;
    background-color: black;
  }
  .input-field-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 3px;
  }
  .input-field-container span {
    font-size: 37px;
    color: white;
  }
  .input-field-container input {
    font-size: 18px;
    height: 100%;
    width: 80%;
    color: white;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
  }
  .input-field-container button{
    height: 100%;
    outline-color: transparent;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin: 0;
  }


  .lower-content {
    display: flex;
    flex-direction: row;
    width: 100%; 
    height: 15%;
  }
  .socialn-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .socialn-list a {
    font-size: 20px;
    text-decoration:none;
    color: white;
  }
  .label-co {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .label-co p{
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  .label-co span{
    margin: 0;
    padding: 0;
    font-size: 20px;
  }

  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
    font-size: 45px;
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

