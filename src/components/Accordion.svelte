<script lang="ts">
  import { slide } from 'svelte/transition';
  
  export let title: string;
  export let points: string[];
  export let isOpen: boolean;
  export let toggleAccordion: () => void;
</script>

<div class="accordion">
  <button class="accordion-header" on:click={toggleAccordion}>
    <h2>{title}</h2>
    <span class="toggle-icon">{isOpen ? '-' : '+'}</span>
  </button>
  {#if isOpen}
    <div class="accordion-content" transition:slide>
      <ul>
        {#each points as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .accordion {
    width: 80%;
    margin-bottom: 1.5rem;
  }

  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    border-radius: 0.8rem;
    box-shadow: 0 1px 3px rgba(128, 122, 122, 0.1);
    border-color: #000000;
  }

  .toggle-icon {
    font-size: 2rem;
  }

  .accordion-content {
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.8rem;
  }

  .accordion-content ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    margin-left: 2rem;
  }

  .accordion-content li {
    margin: 0.5rem 1rem 0.5rem 0;
    color: black;
    flex-basis: calc(33.333% - 1rem);
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .accordion-content li {
      flex-basis: calc(50% - 1rem);
    }
  }

  @media (max-width: 480px) {
    .accordion-content li {
      flex-basis: 100%;
    }
  }
</style>