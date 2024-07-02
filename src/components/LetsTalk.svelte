<script>
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { goto } from '$app/navigation';
  
  let isHovered = false;
  let buttonRect;

  const scale = tweened(0, {
    duration: 200,
    easing: cubicInOut
  });

  $: if (isHovered) {
    scale.set(1);
  } else {
    scale.set(0);
  }

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  function updateButtonRect(node) {
    buttonRect = node.getBoundingClientRect();
  }

  function handleClick() {
    goto('/lets-talk');
  }
</script>

<div class="main-container" style:--scale={$scale}>
  <div class="content-container">
    <div class="labels-container">
      <p class="header-one">Got a project in mind?</p>
      <p class="header-two">Let's talk</p>
    </div>
  </div>
  <div class="animated-button">
    <button
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      on:click={handleClick}
      use:updateButtonRect
    >
      Start a project
    </button>
  </div>
</div>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;
    overflow: hidden;
  }

  .main-container::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200vmax;
    height: 200vmax;
    transform: translate(-50%, -50%) scale(calc(var(--scale) * 1));
    background-color: #00ffff6b;
    border-radius: 50%;
    transition: transform 1s cubic-bezier(0.87, 0, 0.13, 1);
    z-index: 0;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 35%;
    z-index: 1;
  }

  .labels-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }

  .labels-container p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .header-one {
    font-size: 40px;
  }

  .header-two {
    font-size: 25px;
  }

  .animated-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
  }
  @media only screen and (max-width: 400px){
    .header-one {
      font-size: 30px;
    }

    .header-two {
      font-size: 15px;
    }
  }
  @media only screen and (max-height: 800px){
    .content-container {
      top: 25%;
    }
  }
  @media only screen and (max-height: 700px){
    .content-container {
      top: 22%;
    }
  }
  @media only screen and (max-height: 460px){
    .content-container {
      top: 20%;
    }
  }
  @media only screen and (max-height: 400px){
    .content-container {
      top: 10%;
    }
  }
  @media only screen and (max-height: 300px){
    .content-container {
      top: 5%;
    }
  }
</style>
