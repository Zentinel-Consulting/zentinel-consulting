<script>
  import { fade } from 'svelte/transition';
  import FormInput from "./FormInput.svelte";

  let list_steps = Array.from({ length: 4 }, (value, index) => index);
  let currentStep = 0;

  function nextStep() {
    if(currentStep === 0 && checkFirstStep()===false) {
      return;
    }
    if (currentStep < list_steps.length - 1) {
      currentStep++;
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
    }
  }

  let name_input_fi;
  let lastname_input_fi;
  let email_input_fi;
  let company_input_fi;
  let job_title_input_fi;
  function checkFirstStep() {
    let  nifi = name_input_fi.validateInput();
    let  lnifi = lastname_input_fi.validateInput();
    let  eifi = email_input_fi.validateInput();
    let  cifi = company_input_fi.validateInput();
    let  jtifi = job_title_input_fi.validateInput();
    if(nifi && lnifi && eifi && cifi && jtifi){
      console.log("done");
      return true;
    }
    return false;
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
            <FormInput bind:this={name_input_fi} placeholder_t="What's your name?" type_t="text-name"/>
            <div class="form-spacer"/>
            <FormInput bind:this={lastname_input_fi} placeholder_t="What's your last name?" type_t="text-name"/>
            <div class="form-spacer"/>
            <FormInput bind:this={email_input_fi} placeholder_t="What's your email?" type_t="email"/>
            <div class="form-spacer"/>
            <FormInput bind:this={company_input_fi} placeholder_t="What's the name of your company?" type_t="text-company"/>
            <div class="form-spacer"/>
            <FormInput bind:this={job_title_input_fi} placeholder_t="What's your job title?" type_t="text-job-title"/>
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
            <div
              class="tag-list-holder"
            >
              <FormInput type_t="tag_list" />
            </div>
            <div
              class="description-holder"
            >
              <FormInput type_t="textarea"/>
            </div>
          </div>
        </div>
      {/if}
      {#if currentStep === 3}
        <div
          class="step-content"
          in:fade={{ duration: 300 }}
          out:fade={{duration: 300 }}
        >
          <p class="step-label">Budget Estimation</p>
          <div
            class="inputs-container"
          >
            <div class="form-spacer"/>
            <p class="section-description-label">Got a budget in mind? Let us know what you're thinking so we can tailor our proposal to fit your needs.</p>
            <div class="form-spacer"/>
            <div
              class="slider-holder"
            >
              <FormInput type_t="slider"/>
            </div>
            <div class="form-spacer"/>
            <p class="step-label">Lets make this happen!</p>
            <p class="section-description-label">We are happy to get this going :)</p>
            <div
              class="send-button-holder"
            >
              <button class="button-obj" >
                Send 
              </button>
            </div>
          </div>
        </div>
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
  }
  .stepper-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5%;
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
  }
  .input-fields {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
  }
  .step-content {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
  }
  .step-content p {
    margin: 0;
    padding: 0;
  }
  .step-label {
    font-size: 30px;
  }
  .inputs-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
  }
  .form-spacer {
    height: 5%; 
  }
  .section-description-label {
    font-size: 15px;
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
  }
  .dates-cell {
    display: flex;
    justify-content: center;
    width: 45%;
  }
  .buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10%;
  }
  .button-obj {
    padding: 10px 20px;
    font-size: 18px;
    width: 200px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
  }
  .button-obj:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .tag-list-holder {
    width: 100%;
  }
  .description-holder {
    width: 100%;
    height: 40%;
  }
  .slider-holder {
    width: 100%;
    height: 30%;
  }
  .send-button-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
  }
</style>

