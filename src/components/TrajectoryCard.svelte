<script>
  export let cardNumber = 45;
  export let labeOperator = "K+";
  export let cardLabel = "projects";
  export let description = "ine height is a CSS property that is used to control the vertical space between lines of text. It specifies the distance between the baselines of consecutive lines of text. This can make the text more readable and aesthetically pleasing by adjusting the spacing between lines. Here is an example of how line height can be set in CSS.";
  export let run_animation = false;


  let currentNumber = 0;
  const startAnimation = () => {
    let increment = Math.ceil(cardNumber / cardNumber); 
    let interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= cardNumber) {
        currentNumber = cardNumber;
        clearInterval(interval);
      }
    }, 70); 
  };

  $: if(run_animation){
    startAnimation();
    run_animation = false;
  }

</script>

<div
  class="main-container"
>
  <div
    class="label-container"
  >
    <div
      class="units-container"
    >
      <p>{ currentNumber }{ labeOperator }</p>
      <p>{ cardLabel }</p>
    </div>
  </div>
  <div
    class="description-container"
  >
    <p>{ description }</p>
  </div>
</div>

<style>
  .main-container {
    width: 100%; 
  }
  .units-container {
    font-family: "Times New Roman", Times, serif;
    font-size: 35px;
  }
  .units-container p{
    margin: 0;
    padding: 0;
  }

  .description-container p {
    line-height: 2.5;
    color: #CACACA;
  }
</style>
