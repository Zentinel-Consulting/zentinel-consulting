<script lang="ts">
    import { tick, onDestroy } from 'svelte';
    import { gsap } from 'gsap/dist/gsap';
    import { Flip } from 'gsap/dist/Flip';
  
    export let services: { id: number, title: string }[] = [];
    export let servicesSentences: { id: number, sentences: string[] }[] = [];
    export let servicesImages: { id: number, image: string }[] = [];
  
    gsap.registerPlugin(Flip);
  
    let selected = 1;
    let currentIndex = 0;
  
    async function flip(id: number) {
      const state = Flip.getState('.grid-item');
      selected = id;
      await tick();
      Flip.from(state, {
        duration: 0.5,
        stagger: 0.02,
        absolute: true,
      });
    }
  
    $: selectedService = servicesSentences.find(service => service.id === selected);

    let randomColors: string[] = [];

    // function generateRandomColor() {
    //     const hue1 = Math.floor(Math.random() * 360);
    //     const hue2 = Math.floor(Math.random() * 360);
    //     const saturation = 30 + Math.floor(Math.random() * 30);
    //     const lightness = 30 + Math.floor(Math.random() * 20);
    //     const color1 = `hsl(${hue1}, ${saturation}%, ${lightness}%)`;
    //     const color2 = `hsl(${hue2}, ${saturation}%, ${lightness}%)`;
    //     const angle = Math.floor(Math.random() * 360);
    //     return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    // }

    // services.forEach(() => {
    //     randomColors.push(generateRandomColor());
    // });

    const intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % services.length;
        flip(services[currentIndex].id);
    }, 5000); 

    onDestroy(() => {
        clearInterval(intervalId);
    });
  </script>

<!-- style="background-image: url({servicesImages.find(s => s.id === service.id)?.image});" -->

<div class="use-case-container">
    <div class="grid-container">
      {#each services as service}
        <button
          class="grid-item"
          class:selected={service.id === selected}
          style="background-image: url({servicesImages.find(s => s.id === service.id)?.image});"
          on:click={() => flip(service.id)}
        >
          <div class="item-content">
            {#if service.id === selected}
              <ul>
                {#if selectedService}
                  {#each selectedService.sentences as sentence}
                    <li>{sentence}</li>
                  {/each}
                {/if}
              </ul>
            {/if}
            <div class="title-container">
              <h3 class:selected={service.id === selected}>{service.title}</h3>
            </div>
          </div>
        </button>
      {/each}
    </div>
  </div>
  
  <style>
    .use-case-container {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      height: 100%;
      width: 100%;
    }
  
    .grid-item {
      background-size: cover;
      background-position: center;
      padding: 20px;
      cursor: pointer;
      border: none;
      text-align: center;
      position: relative;
      overflow: auto;
      border-radius: 1.5rem;
    }
  
    .grid-item.selected {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }
  
    .item-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title-container {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-top: auto;
    }

    h3 {
        margin: 0;
        color: white;
        padding: 0px;
        font-size: 3em;
        text-transform: uppercase;
    }

    h3.selected {
        font-size: 5em;
    }

    ul {
        color: white;
        margin: 0;
        align-self: flex-start;
        text-align: left;
        font-size: 2em;
        margin-left: 3rem;
        margin-top: 2rem;
    }

    @media (max-width: 600px) {
        .grid-container {
            grid-template-columns: auto;
        }

        .grid-item {
            border-radius: 0.2rem;
        }

        .grid-item.selected {
            grid-column: 1;
            grid-row: 1;
            min-height: 200px;
        }

        h3 {
            font-size: 1.5em;
        }

        h3.selected {
            font-size: 2.5em;
        }

        ul {
            font-size: 1.2em;
            margin-left: 0.5rem;
            margin-top: 0;
        }
        
    }
  </style>