<script>
  import { onMount, createEventDispatcher } from 'svelte';

  export let message = "Please fill the blank spaces.";
  export let duration = 5000; // Duration in milliseconds
  export let line_color = "red";
  export let lock_screen = "none";

  const dispatch = createEventDispatcher();

  let animate = false;
  let fadeOut = false;
  let hidden = true;

  function startAnimation() {
    hidden = false;
    animate = true;
  }

  function handleAnimationEnd() {
    fadeOut = true;
  }

  function handleFadeOutEnd() {
    hidden = true;
    fadeOut = false;
    animate = false;
    dispatch('closed');
  }

  onMount(() => {
    startAnimation();
    setTimeout(() => {
      handleAnimationEnd();
    }, duration);
  });
</script>

<div class="main-container" 
     class:fadeIn={animate} 
     class:fadeOut={fadeOut} 
     class:hidden={hidden} 
     style="--lock-value: {lock_screen};"
     on:transitionend={fadeOut ? handleFadeOutEnd : null}>
  <div class="row-container" on:click|stopPropagation> 
    <div class="card-container" on:click|stopPropagation>
      <div class="progress-line-container">
        <div class="progress-line" class:animate={animate} style="--status-color: {line_color}; animation-duration: {duration}ms;" on:animationend={handleAnimationEnd}></div>
      </div>
      <div class="content-container">
        <div class="paragraph-container">
          <p>{message}</p>
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    opacity: 0; 
    transition: opacity 1s ease-in-out; 
    pointer-events: var(--lock-value); 
  }
  .main-container.fadeIn {
    opacity: 1;
    /* Only allow clicks through the main container, not its content */
    pointer-events: var(--lock-value); 
  }
  .main-container.fadeOut {
    opacity: 0;
  }
  .main-container.hidden {
    display: none;
  }
  .row-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    height: 15%;
    width: 100%;
    /* Allow clicks to pass through to elements below */
    pointer-events: none; 
  }
  .card-container {
    display: flex;
    flex-flow: column; 
    margin-right: 2%;
    width: 20%;
    height: 50%;
    background-color: green;
    pointer-events: auto; 
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); 
  }
  .progress-line-container {
    width: 100%;
    height: 5px;
    background-color: #FFF0F1;
  }
  .progress-line {
    height: 100%;
    width: 100%; 
    background-color: var(--status-color);
  }
  .progress-line.animate {
    animation: decreaseWidth 5s linear forwards;
  }
  @keyframes decreaseWidth {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
  .content-container {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
  }
  .paragraph-container {
    display: flex;
    align-items: center;
    width: 90%;
    height: 90%;
  }
  .paragraph-container p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #3D3D3D;
    padding: 0;
    margin: 0;
  }
  
  @media only screen and (max-width: 1250px){
    .paragraph-container p{
      font-size: 17px;
    } 
  }
  @media only screen and (max-width: 1200px){
    .card-container{
      width: 35%;
    }
  }
  @media only screen and (max-width: 700px){
    .card-container{
      width: 45%;
    }
  }
  @media only screen and (max-width: 500px){
    .row-container {
      justify-content: center;
    }
    .card-container {
      width: 80%;
      background-color: red;
      margin-right: 0%;
    }
  }
</style>
