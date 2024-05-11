<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let isInView = false;
  let highlightElement: HTMLElement;

  const backgroundSize = tweened(0, {
    duration: 500,
    easing: cubicOut,
  });

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        isInView = entries[0].isIntersecting;
        if (isInView) {
          backgroundSize.set(5.5);
        } else {
          backgroundSize.set(0);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(highlightElement);

    return () => {
      observer.unobserve(highlightElement);
    };
  });
</script>

<div class="quote">
  <div class="quote-container">
    <div class="quote-text">
      <p>
        Elevating <span class="highlight" style="background-size: {$backgroundSize}em;" bind:this={highlightElement}>excellence;</span><br />
        <br />
        Pioneering quality,<br />
        <br />
        innovation, and impact<br />
        <br />
        with every project.<br />
      </p>
    </div>
  </div>
</div>

<style>
  .quote {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    background-color: transparent;
  }

  .quote-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    border-radius: 2rem;
  }

  .quote-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    padding: 2rem;
    text-align: left;
  }

  .quote-text p {
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    line-height: 0.8;
  }

  .highlight {
    background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=e663ef);
    background-repeat: no-repeat;
    background-size: 200% auto;
    padding: 0.5rem;
    transition: background-position 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @media (max-width: 640px) {
    .quote-container {
      width: 90%;
    }

    .quote-text p {
      font-size: 1.2rem;
    }
  }

</style>