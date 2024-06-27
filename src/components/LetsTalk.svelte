<script>
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  
  let isHovered = false;
  let buttonRect;

  const scale = tweened(0, {
    duration: 1000,
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
    cursor: pointer;
  }
</style>
