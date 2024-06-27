<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  
    gsap.registerPlugin(ScrollTrigger);
  
    interface Step {
      id: number;
      title: string;
    }
  
    const steps: Step[] = [
      { id: 1, title: 'Exploration & Product Analysis' },
      { id: 2, title: 'Product Design' },
      { id: 3, title: 'Software Development' },
      { id: 4, title: 'Support & Management' }
    ];
  
    let activeSteps: boolean[] = steps.map(() => false);
    let container: HTMLElement;
  
    onMount(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            updateProgress(progress);
          }
        }
      });
  
      steps.forEach((_, index) => {
        timeline.to(`.step[data-index="${index}"] .step-content`, { backgroundColor: '#3b82f6', color: 'white', duration: 0.5 }, index * 0.5);
      });
    });
  
    function updateProgress(progress: number) {
      gsap.to('.line-progress', { scaleY: progress, transformOrigin: 'top', ease: 'none' });
    }
  </script>
  
  <div class="container" bind:this={container}>
    <h1>That's how we approach projects</h1>
    <p>Regardless of any project, we deliver.</p>
  
    <div class="timeline">
      {#each steps as step, index}
        <div
          class="step"
          class:active={activeSteps[index]}
          data-index={index}
        >
          <div class="step-content" class:left={index % 2 === 0} class:right={index % 2 !== 0}>
            <h3>{step.title}</h3>
          </div>
        </div>
      {/each}
  
      <div class="line">
        <div class="line-progress"></div>
      </div>
    </div>
  </div>
  
  <style>
    .container {
      min-height: 100vh;
      padding: 2rem;
      background-color: #f3f4f6;
      font-family: Arial, sans-serif;
    }
  
    h1 {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  
    p {
      text-align: center;
      margin-bottom: 3rem;
    }
  
    .timeline {
      position: relative;
      max-width: 600px;
      margin: 0 auto;
    }
  
    .step {
      margin-bottom: 4rem;
      position: relative;
    }
  
    .step-content {
      width: 250px;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: #d1d5db;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }
  
    .step.active .step-content {
      background-color: #3b82f6;
      color: white;
    }
  
    .left {
      margin-right: auto;
    }
  
    .right {
      margin-left: auto;
    }
  
    .line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #d1d5db;
      transform: translateX(-50%);
    }
  
    .line-progress {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #3b82f6;
      transform-origin: top;
      transition: transform 0.3s ease;
    }
  </style>
  