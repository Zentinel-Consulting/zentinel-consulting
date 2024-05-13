<script>
  import { fade } from 'svelte/transition';
  import { navigating } from '$app/stores';

  let transitioning = false;

  $: {
    if ($navigating) {
      transitioning = true;
    } else {
      setTimeout(() => (transitioning = false), 300); // Adjust this value to match your transition duration
    }
  }
</script>

{#if transitioning}
  <div class="transition-container" transition:fade>
    <slot />
  </div>
{:else}
  <div class="transition-container">
    <slot />
  </div>
{/if}

<style>
  .transition-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.3s; /* Adjust this value to match your transition duration */
  }

  .transition-container.fade-enter,
  .transition-container.fade-leave-to {
    opacity: 0;
  }
</style>
