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
          <p class="step-label">Personal Data</p>
          <FormInput />
        </div>
      {/if}
      {#if currentStep === 1}
        <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Content for Step 2</p>
      {/if}
      {#if currentStep === 2}
        <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Content for Step 3</p>
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
    width: 100%;
    height: 100%;
    background-color: orange;
  }
  .step-content p {
    margin: 0;
    padding: 0;
    background-color: yellow;
  }
  .input-fields {
    color: black;
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

