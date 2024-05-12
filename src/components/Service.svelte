<script lang="ts">
    export let title: string;
    export let points: string[];

</script>

<div class="service-container">
    <div class="content">
        <div class="service-image"/>
        <div class="service-description">
            <div class="service-title">
                <h1>{title}</h1>
            </div>
            <div class="service-points">
                {#each points as point}
                    <span>{point}</span>
                {/each}
            </div>
        </div>
    </div>
</div>


<style>
    .service-container {
        background-color: transparent;
        min-height: 300px;
        width: 90%;
        margin-top: 2rem;
    }

    .content {
        display: flex;
        flex-direction: column  ;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: transparent;
    }
    
    .service-image {
        width: 100%;
        height: 60%;
        background-color: #f72323;
        background-image: url(./ai-abstract.jpg);
        background-size: cover;
        background-position: center;
        border-radius: 1rem;
    }

    .service-description {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        width: 100%;
        padding-top: 1rem;
    }

    .service-title {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: top;
    }

    .service-title h1 {
        color: black    ;
        font-size: 2rem;
        padding-left: 0.5rem;
        overflow: hidden;
    }

    .service-points {
        width: 60%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: top;
        margin-top: 0.5rem;
        gap: 0.5rem;
        margin-right: 0;
        color: black;
    }

    .service-points span {
        box-sizing: border-box;
        font-size: 1.2rem;
    }


    @media (max-width: 768px) {
  .service-container {
    width: 80%;
    margin-bottom: 1rem;
  }

  .content {
    border-radius: 0;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .service-image {
    display: none; 
  }

  .service-description {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  .service-title h1 {
    font-size: 1.5rem;
    padding-left: 0rem;
    text-align: center;
  }

  .service-points {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    margin-right: 0rem;
    margin-top: 1rem;
  }

  .service-points span {
    width: auto;
    padding: 0rem;
    text-align: center;
  }
}


</style>