<script lang="ts">
    import { onMount } from 'svelte';
  
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let animationFrameId: number;
  
    function handleMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
  
    function updateFollower() {
      const dx = mouseX - followerX;
      const dy = mouseY - followerY;
      followerX += dx * 0.1;
      followerY += dy * 0.1;
      animationFrameId = requestAnimationFrame(updateFollower);
    }
  
    onMount(() => {
      animationFrameId = requestAnimationFrame(updateFollower);
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    });
  </script>
  
  <div class="mouse-follower" style="transform: translate({followerX}px, {followerY}px)"></div>
  
  <svelte:window on:mousemove={handleMouseMove} />
  
  <style>
    .mouse-follower {
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff00ff;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease-out;
    }
    
    @media (max-width: 768px) {
    .mouse-follower {
      display: none;
    }
  }
  </style>