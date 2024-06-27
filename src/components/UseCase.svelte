<script lang="ts">

  export let services: { id: number, title: string }[] = [];
  export let servicesSentences: { id: number, sentences: string[] }[] = [];
  export let servicesImages: { id: number, image: string }[] = [];
  
</script>

<div class="use-case-container">
  <div class="grid-container">
    {#each services as service}
      <button
      class="grid-item"
      style="background-image: {servicesImages.find(s => s.id === service.id)?.image};"
    >
      <div class="item-content">
        <div class="sentences">
          <ul>
            {#each (servicesSentences.find(s => s.id === service.id)?.sentences ?? []) as sentence}
              <li>{sentence}</li>
            {/each}
          </ul>
        </div>
        <div class="title-container">
          <h3>{service.title}</h3>
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
    gap: 15px;
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
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .item-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sentences {
    display: none; 
  }

  .grid-item:hover .sentences {
    display: block; 
  }

  .title-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: auto;
    padding-left: 2rem;
    padding-bottom: 1rem;
  }

  h3 {
    margin: 0;
    color: white;
    padding: 0;
    font-size: 3em;
  }

  ul {
    color: white;
    align-self: flex-start;
    text-align: left;
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top: 2rem;
    list-style-type: none;
    padding: 0;
  }


  @media (max-width: 600px) {
    .grid-container {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      margin-top: 1rem;
      height: 90%;
    }

    .grid-item {
      flex: 0 0 80%;
      scroll-snap-align: start;
      border-radius: 0.2rem;
      display: flex;
      flex-direction: column;
    }

    .sentences {
      display: block;
    }
    

    h3 {
      font-size: 2rem;
    }

    ul {
      font-size: 1.5em;
      margin-left: 1.5rem;
      margin-top: 2rem;
    }
  }
</style>
