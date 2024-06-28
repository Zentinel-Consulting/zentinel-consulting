<script>
  import { fade } from 'svelte/transition';
  import FormInput from "./FormInput.svelte";

  let list_steps = Array.from({ length: 4 }, (value, index) => index);
  let currentStep = 0;

  function nextStep() {
    if (currentStep < list_steps.length - 1) {
      currentStep++;
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
    }
  }
</script>

<div class="main-container">
  <div class="stepper-container">
    {#each list_steps as step, index}
      <div
        class="step-line"
        style="--status-color: {index <= currentStep ? "black" : '#D9D9D9'};"
      >
      </div>
    {/each}
  </div>
  <div class="form-content">
    <div class="input-fields">
      {#if currentStep === 0}
        <div
          class="step-content"
          in:fade={{ duration: 300 }}
          out:fade={{duration: 300 }}
        >
          <p class="step-label">Howdy!</p>
          <div
            class="inputs-container"
          >
            <div class="form-spacer"/>
            <p class="section-description-label">Tell us a bit about yourself so we can connect and collaborate. Your name, email, and a bit about where you work will do the trick!</p>
            <div class="form-spacer"/>
            <FormInput placeholder_t="What's your name?" />
            <div class="form-spacer"/>
            <FormInput placeholder_t="What's your last name?" />
            <div class="form-spacer"/>
            <FormInput placeholder_t="What's your email?" />
            <div class="form-spacer"/>
            <FormInput placeholder_t="What's the name of your company?" />
            <div class="form-spacer"/>
            <FormInput placeholder_t="What's your job title?" />
          </div>
        </div>
      {/if}
      {#if currentStep === 1}
        <div
          class="step-content"
          in:fade={{ duration: 300 }}
          out:fade={{duration: 300 }}
        >
          <p class="step-label">Timeframe</p>
          <div
            class="inputs-container"
          >
            <div class="form-spacer"/>
            <p class="section-description-label">When do you want to kick off and wrap up your project? Let’s pencil in those key dates.</p>
            <div class="form-spacer"/>
            <div
              class="dates-row"
            >
              <div class="dates-cell">
                <FormInput type_t="date" />
              </div>
              <div class="dates-cell">
                <FormInput type_t="date" />
              </div>
            </div>
          </div>
        </div>
      {/if}
      {#if currentStep === 2}
        <div
          class="step-content"
          in:fade={{ duration: 300 }}
          out:fade={{duration: 300 }}
        >
          <p class="step-label">What Can We Build Together? </p>
          <div
            class="inputs-container"
          >
            <div class="form-spacer"/>
            <p class="section-description-label">Tell us about your vision. What type of service are you looking for, and give us a brief description of your dream project.</p>
            <div class="form-spacer"/>
          </div>
        </div>
      {/if}
      {#if currentStep === 3}
        <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Content for Step 4</p>
      {/if}
    </div>
    <div class="buttons-container">
      <button class="button-obj" on:click={prevStep} disabled={currentStep === 0}>
        Previous
      </button>
      <button class="button-obj" on:click={nextStep} disabled={currentStep === list_steps.length - 1}>
        Next
      </button>
    </div>
  </div>
</div>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: pink;
  }
  .stepper-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5%;
    background-color: green;
  }
  .step-line {
    width: 20%;
    height: 5%;
    background-color: var(--status-color);
  }
  .form-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 95%;
    background-color: red;
  }
  .input-fields {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
    background-color: blue;
  }
  .step-content {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    background-color: orange;
  }
  .step-content p {
    margin: 0;
    padding: 0;
    background-color: yellow;
  }
  .step-label {
    font-family: "Times New Roman", Times, serif;
  }
  .inputs-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    background-color: red;
  }
  .form-spacer {
    height: 5%; 
  }
  .section-description-label {
    font-size: 18px;
  }
  .input-fields {
    color: black;
  }
  .dates-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 50%;
    background-color: pink;
  }
  .dates-cell {
    display: flex;
    justify-content: center;
    width: 45%;
    background-color: yellow;
  }
  .buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    background-color: brown;
  }
  .button-obj {
    padding: 10px 20px;
    font-size: 18px;
    width: 200px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
  }
  .button-obj:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

