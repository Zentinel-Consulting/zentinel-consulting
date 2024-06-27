<script lang="ts">
  import { page } from '$app/stores';
	import Header from '../components/Header.svelte';
  import MouseFollower from '../components/MouseFollower.svelte';

  let pagePath: never
  $: {
    pagePath = $page.url.pathname;
    console.log(pagePath);
  }
  
    
</script>
  
{#if pagePath.startsWith('/aichat')}
  <slot/>
{:else}
  <div class="main-content">
      <div class="background">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
      <Header />
      <main class="content">
          <slot />
      </main>
      <MouseFollower />
  </div>
{/if}


<style>
    .main-content {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        color: white;
        background-color: black;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0; 
        overflow: hidden;
    }

    .content {
        flex: 1;
        position: relative; 
        z-index: 1; 
    }

    .circle {
      position: absolute;
      width: 40vw;
      height: 40vw;
      border-radius: 50%;
      filter: blur(100px);
      animation: moveCircles 10s ease-in-out infinite alternate;
    }

    .circle-1 {
      background-color: #ff00ff65;
      left: -25vw;
      animation-name: moveCircle1;
    }

    .circle-2 {
      background-color: #00ffff6b;
      right: -25vw;
      animation-name: moveCircle2;
    }

    @keyframes moveCircle1 {
      0% {
        transform: translateX(0);
      }
      50%, 100% {
        transform: translateX(calc(50vw - 25%));
      }
    }

    @keyframes moveCircle2 {
      0%, 50% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-50vw + 25%));
      }
    }


</style>
