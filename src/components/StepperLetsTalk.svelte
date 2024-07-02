<script>
  import { fade } from 'svelte/transition';
  import FormInput from "./FormInput.svelte";
  import  NotificationCard  from "./NotificationCard.svelte"

  let formData = {
    name: '',
    lastname: '',
    email: '',
    company: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    selectedTags: [],
    description: '',
    start_budget: 0,
    end_budget: 0
  };

  let minRangeValue_t = 40;
  let maxRangeValue_t = 1000;

  let tag_options_t = [
    {"label":"Web Design", "selected": false},
    {"label":"Data Science", "selected": false},
    {"label":"SEO", "selected": false},
    {"label":"Cloud Solutions", "selected": false},
    {"label":"Automation", "selected": false},
    {"label":"Consulting", "selected": false},
    {"label":"Branding", "selected": false},
    {"label":"UI", "selected": false},
    {"label":"Migration", "selected": false},
    {"label":"Native App", "selected": false},
    {"label":"Web App", "selected": false},
    {"label":"Portfolio", "selected": false},
    {"label":"AI", "selected": false},
    {"label":"Machine Learning", "selected": false},
    {"label":"Networking", "selected": false},
    {"label":"Project Management", "selected": false},
  ];



  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Format dates for input fields
  let formattedToday = today.toISOString().slice(0, 10);
  let formattedTomorrow = tomorrow.toISOString().slice(0, 10);



  let list_steps = Array.from({ length: 4 }, (value, index) => index);
  let currentStep = 0;

  function nextStep() {
    if(currentStep === 0 && checkFirstStep()===false) {
      displayNotification("Fill the blank spaces.");
      return;
    }
    if(currentStep === 1 && checkSecondStep()===false) {
      displayNotification("Select a valid date.");
      return;
    }
    if(currentStep === 2 && checkThirdStep()===false) {
      displayNotification("Select at list a kind of service.");
      return;
    }
    if(currentStep === 3) {
      checkFourthStep();
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

  // First step form management
  let name_input_fi;
  let lastname_input_fi;
  let email_input_fi;
  let company_input_fi;
  let job_title_input_fi;
  function checkFirstStep() {
    let  nifi   = name_input_fi.validateInput();
    let  lnifi  = lastname_input_fi.validateInput();
    let  eifi   = email_input_fi.validateInput();
    let  cifi   = company_input_fi.validateInput();
    let  jtifi  = job_title_input_fi.validateInput();
    if(nifi && lnifi && eifi && cifi && jtifi){
      formData["name"]      = name_input_fi.getInputValue();
      formData["lastname"]  = lastname_input_fi.getInputValue();
      formData["email"]     = email_input_fi.getInputValue();
      formData["company"]   = company_input_fi.getInputValue();
      formData["jobTitle"]  = job_title_input_fi.getInputValue();
      return true;
    }
    return false;
  }

  // Second Step Form Management
  let start_date_fi;
  let end_date_fi;
  function checkSecondStep() {
    let startDate = new Date(start_date_fi.getSelectedDate());
    let endDate = new Date(end_date_fi.getSelectedDate());

    if (startDate < endDate) {
      formData["startDate"] = start_date_fi.getSelectedDate();
      formData["endDate"] = end_date_fi.getSelectedDate();
      formattedToday = start_date_fi.getSelectedDate();
      formattedTomorrow = end_date_fi.getSelectedDate();
      return true; 
    }
    return false; 
  }

  // Third step form management
  let tag_list_fi;
  let textarea_fi;
  function checkThirdStep() {
    let tlfi = tag_list_fi.validateTags();
    if(tlfi){
      formData["selectedTags"] = tag_list_fi.getSelectedTags();
      formData["description"] = textarea_fi.getInputValue();
      tag_options_t = tag_list_fi.getUpdateTags();
      return true;
    }
      return false;
  }

  function checkFourthStep() {
    formData["start_budget"] = minRangeValue_t;
    formData["end_budget"] = maxRangeValue_t;
    console.log(formData);
  }



  let showNotification = false;
  let notificationMessage = "";

  function displayNotification(message) {
    notificationMessage = message;
    showNotification = true;
  }

  function handleNotificationClosed() {
    showNotification = false;
  }
</script>


{#if showNotification}
  <NotificationCard 
    message={notificationMessage}
    on:closed={handleNotificationClosed}
  />
{/if}


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
            <FormInput  inputValue={formData["name"]} bind:this={name_input_fi} placeholder_t="What's your name?" type_t="text-name" />
            <div class="form-spacer"/>
            <FormInput inputValue={formData["lastname"]} bind:this={lastname_input_fi} placeholder_t="What's your last name?" type_t="text-name"/>
            <div class="form-spacer"/>
            <FormInput inputValue={formData["email"]} bind:this={email_input_fi} placeholder_t="What's your email?" type_t="email"/>
            <div class="form-spacer"/>
            <FormInput inputValue={formData["company"]} bind:this={company_input_fi} placeholder_t="What's the name of your company?" type_t="text-company"/>
            <div class="form-spacer"/>
            <FormInput inputValue={formData["jobTitle"]} bind:this={job_title_input_fi} placeholder_t="What's your job title?" type_t="text-job-title"/>
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
                <FormInput bind:this={start_date_fi} type_t="date" selectedDate={formattedToday} />
              </div>
              <div class="dates-cell">
                <FormInput bind:this={end_date_fi} type_t="date" selectedDate={formattedTomorrow}/>
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
              <FormInput bind:this={tag_list_fi} type_t="tag_list" tag_options_t={tag_options_t} />
            </div>
            <div
              class="description-holder"
            >
              <FormInput bind:this={textarea_fi} inputValue={formData["description"]} type_t="textarea"/>
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
              <FormInput type_t="slider" bind:minRangeValue_t={minRangeValue_t} bind:maxRangeValue_t={maxRangeValue_t}/>
            </div>
            <div class="form-spacer"/>
            <p class="step-label">Lets make this happen!</p>
            <p class="section-description-label">We are happy to get this going :)</p>
            <div
              class="send-button-holder"
            >
              <button class="button-obj" on:click={checkFourthStep}>
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
  @media only screen and (max-width: 1250px){
    .dates-row {
      justify-content: space-between;
    }
  }
  @media only screen and (max-width: 1100px){
    .dates-row {
      height: 40%;
    }
  }
  @media only screen and (max-width: 1200px){
    .button-obj {
      width: 150px;

    }
  }
  @media only screen and (max-width: 650px){
    .dates-row {
      flex-direction: column;
      align-items: center;
      height: 70%;
    }
    .dates-cell {
      height: 48%;
      width: 60%;
    }
  }
  @media only screen and (max-width: 550px){
    .button-obj {
      width: 100px;
      font-size: 14px;

    }
    .dates-cell {
      width:65%;
    }
  }
  @media only screen and (max-width: 700px),
              screen and (max-height: 900px){
    .tag-list-holder {
      overflow-y: scroll;
    }
  }
  @media only screen and (max-width: 700px) {
    .tag-list-holder {
      height: 30%;
    }
  }
</style>
