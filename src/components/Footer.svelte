<script>
  import { PUBLIC_BASE_URL, PUBLIC_TYPE_HTTP } from "$env/static/public";
  import { onMount } from 'svelte';
  import  NotificationCard  from "./NotificationCard.svelte"

  let lines = [];

  // Function to calculate the number of lines
  function calculateLines() {
    const containerHeight = document.querySelector('.zebra-container')?.clientHeight ?? 0;
    const targetHeight = 0.9 * containerHeight; // 90% of container height
    let currentHeight = 0;
    let lineIndex = 0;
    
    while (currentHeight < targetHeight) {
      const margin = (40 - lineIndex) * 0.00055 * containerHeight; // 0.04% of container height
      const height = lineIndex * 0.00055 * containerHeight; // 0.04% of container height
      currentHeight += margin + height;
      lines[lineIndex] = { margin, height };
      lineIndex++;
    }
    
    lines = lines.slice(0, lineIndex); // Trim any excess lines
  }

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

  function debounce(func, wait) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    };
  }

  // Recalculate lines on window resize with debouncing
  onMount(() => {
    calculateLines();
    window.addEventListener('resize', debounce(calculateLines, 200)); // Adjust delay as needed
    return () => window.removeEventListener('resize', calculateLines);
  });


  let email_value;
  let notification_email_error        = false;
  let notification_subscribed_error   = false;
  let notification_subscribed_success = false;
  async function registerUserToNewsletter() {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email_value)) {
      notification_email_error = true;
      return;
    }

    try {
      const response = await fetch(`${PUBLIC_TYPE_HTTP}://${PUBLIC_BASE_URL}/create/newsletter-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email_value }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Subscription successful:', data);
      notification_subscribed_success = true;
      
      // Optionally, clear the email input after successful subscription
      email_value = '';
    } catch (error) {
      notification_subscribed_error = true;
      console.error('Error registering for newsletter:', error);
    }
  }

</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

{#if notification_email_error}
  <NotificationCard 
    message={"Incorrect email format."}
    on:closed={() => {notification_email_error=false}}
  />
{/if}
{#if notification_subscribed_error}
  <NotificationCard 
    message={"There was an error, please try later."}
    on:closed={() => {notification_subscribed_error=false}}
  />
{/if}
{#if notification_subscribed_success}
  <NotificationCard 
    message={"We got ya! :)"}
    on:closed={() => {notification_subscribed_success=false}}
    line_color="#009D71"
  />
{/if}


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
            href="/"
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
                <input type="email" id="email" name="email" placeholder="Email" bind:value={email_value}>
                <button on:click={registerUserToNewsletter}><span class="material-symbols-outlined">north_east</span></button>
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
            <a href="/">Twitter</a>
            <a href="https://www.instagram.com/zentinel.dev/">Instagram</a>
            <a href="https://github.com/Zentinel-Consulting">GitHub</a>
            <a href="/">LinkedIn</a>
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
    {#each lines as line, index}
    <div
      class="zebra-line"
      style="margin-top: {line.height}px; height: {line.margin}px;"
    ></div>
    {/each}
  </div>
</div>

<style>
  .main-container {
    background-color: white;
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
    background-color: white;
    flex-grow: 1;
  }
  .zebra-line {
    background-color: black;
    width: 100%;
    height: var(--margin);
    margin-top: var(--height);
  }

  @media only screen and (max-width: 1300px){
    .socialn-list {
      width: 70%;
    }
  }
  @media only screen and (max-width: 1200px){
    .newsletter-container {
      width: 60%;
    }
  }
  @media only screen and (max-height: 950px){
    .input-field-container button span{
      font-size: 30px;
    }
  }
  @media only screen and (max-height: 840px){
    .input-field-container button span{
      font-size: 25px;
    }
  }
  @media only screen and (max-height: 730px){
    .input-field-container button span{
      font-size: 20px;
    }
  }
  @media only screen and (max-height: 500px){
    .newsletter-label {
      font-size: 15px;
    }
    .input-field-container button span{
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 900px){
    .socialn-list {
      width: 90%;
    }
  }
  @media only screen and (max-width: 1050px){
    .newsletter-container {
      height: 80%;
    }
  }
  @media only screen and (max-width: 760px){
    .newsletter-container {
      width: 80%;
    }
  }
  @media only screen and (max-width: 720px){
    .footer-content {
      height: 50%;
    }
    .upper-content {
      height: 75%;
    }
    .newsletter-container {
      height: 70%;
    }
    .lower-content {
      height: 25%;
      align-items: center;
      flex-direction: column; 
    }
    .lower-content .upper-content-container{
      width: 90%;
    }
    .lower-content .upper-content-container .upper-content-middle-box{
      height: 100%;
    }
    .label-co {
      flex-direction: row;
      justify-content: center;
      align-items: end;
    }
    .label-co p{
      font-size: 15px;
    }
    .label-co span{
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 620px){
    .upper-content {
      flex-direction: column;
    }
    .upper-content .left-content {
      height: 30%;
      width: 100%;
      flex-direction: row;
    }
    .upper-content-middle-box-left {
      justify-content: center;
    }
    .newsletter-container {
      width: 95%;
      height: 90%;
    }
    .upper-content .right-content {
      width: 100%;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 400px){
    .socialn-list {
      width: 100%;
    }
    .socialn-list a {
      font-size: 15px;
    }
  }
  @media only screen and (max-height: 720px){
    .footer-content {
      height: 50%;
    }
  }
</style>
