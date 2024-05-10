<script lang="ts">
    export let id;
    export let selected;
    export let flip;
    export let titleService: string = "Service";
    export let servicesSentences: { id: number, sentences: string[] }[] = [];
    export let servicesImages: { id: number, image: string }[] = [];
  </script>
  
  <button class="grid-item" class:details={selected === id} on:click={() => flip(id)}>
    {#if selected === id}
      <div class="sentences">
        <ul>
          {#each servicesSentences as service}
            {#if service.id === id}
              {#each service.sentences as sentence}
                <li>{sentence}</li>
              {/each}
            {/if}
          {/each}
        </ul>
      </div>
    {/if}
    <div class="title">
      <h1>{titleService}</h1>
    </div>
    <!-- <img src="https://i.pinimg.com/originals/24/22/32/24223276aba1bd1f91190a745023e469.gif" alt="Placeholder" /> -->
    {#each servicesImages as service}
      {#if service.id === id}
        <img src={service.image} alt="Placeholder" />
      {/if}
    {/each}
  </button>
  
  <style>
    .grid-item {
      position: relative;
      padding: 0;
      background: none;
      border: none;
      overflow: hidden;
      cursor: pointer;
    }
  
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
      display: block;
      object-fit: cover;
      border-radius: 1rem;
    }
  
    .details {
      grid-row: span 2;
      grid-column: span 2;
    }
  
    .title {
      position: absolute;
      right: 20px;
      bottom: 0px;
      color: white;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  
    .details .title {
      font-size: 3rem;
    }
  
    .sentences {
      position: absolute;
      left: 20px;
      top: 20px;
      color: white;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: left;
      font-weight: 600;
    }
  
    .sentences ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-top: 10px;
    }
  
    .sentences li {
      margin-bottom: 10px;
    }
  </style>