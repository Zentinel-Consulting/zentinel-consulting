<script>
  import { onMount } from 'svelte';
  import TrajectoryCard from "./TrajectoryCard.svelte";

  let activateAnimation = false;
  let colsContainer;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activateAnimation = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(colsContainer);

    return () => {
      observer.disconnect();
    };
  });

</script>

<div
  class="main-container"
>
  <div
    class="content-container"
  >
    <div
      class="header-container"
    >
      <p>Unlocking Success Through Our Portfolio</p>
    </div>
    <div
      class="columns-container"
      bind:this={colsContainer}
    >
      <div class="column-container">
        <TrajectoryCard 
          cardNumber={4}
          labeOperator={" +"}
          cardLabel={"years"}
          description={"We are a young team of passionated and dedicated developers."}
          run_animation={activateAnimation}
        />
      </div>
      <div class="column-container">
        <TrajectoryCard 
          cardNumber={20}
          labeOperator={"K+"}
          cardLabel={"hours"}
          description={"Our developers have dedicated long hours to deliver great products."}
          run_animation={activateAnimation}
        />
      </div>
      <div class="column-container">
        <TrajectoryCard 
          cardNumber={50}
          labeOperator={" +"}
          cardLabel={"projects"}
          description={"Through our career, we have collaborated with more than 15 parterns."}
          run_animation={activateAnimation}
        />
      </div>
    </div>
  </div>
</div>

<style>
  .main-container{ 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-height: 50vh;
      padding: 2rem;
      background-color: black;
      font-family: Arial, sans-serif;
  }
  .content-container {
      width: 50%;
      height: 85%;
  }
  .header-container {
    width: 100%;
    font-family: "Times New Roman", Times, serif;
    font-size: 40px;
  }
  .columns-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
  }
  .column-container {
    width: 13%; 
  }
  @media only screen and (max-width: 1754px){
    .content-container {
        width: 80%;
    }
  }
  @media only screen and (max-width: 1074px){
    .content-container {
        width: 95%;
    }
  }
  @media only screen and (max-width: 919px){
    .column-container {
      width: 20%; 
    }
  }
  @media only screen and (max-width: 611px){
    .columns-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 100%;
    }
    .column-container {
      width: 100%; 
    }
  }
</style>
