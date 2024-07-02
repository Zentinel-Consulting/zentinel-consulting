<script>
  import DatePicker from "./DatePicker.svelte";
  import RangeSlider from "./RangeSlider.svelte";

  export let type_t = "text-name";
  export let id_t = "name";
  export let name_t = "name";
  export let placeholder_t = "What's your name?";

  export let minRangeValue_t = 50;
  export let maxRangeValue_t = 1000;

  export let sended_ones = false;

  export let tag_options_t = [
    {"label":"Web Design", "selected": false},
    {"label":"Data Science", "selected": false},
    {"label":"SEO", "selected": false},
    {"label":"Cloud Solutions", "selected": false},
    {"label":"Automation", "selected": false},
    {"label":"Consulting", "selected": false},
  ];

  let tag_labels = ["WebApp", "AI", "Data Science", "Backend Services", "Cloud Solutions", "Marketing", "Web Design"];

  export let selectedDate = "2022-03-01";
  export let inputValue = "";         // This Check the value here
  let isValid = true;

  export function getInputValue() {
    return inputValue;
  }
  export function getSelectedDate() {
    return selectedDate;
  }

  function toggleTag(index) {
    tag_options_t = tag_options_t.map((tag, i) => 
      i === index ? {...tag, selected: !tag.selected} : tag
    );
  }
  export function getSelectedTags() {
    return tag_options_t.filter(tag => tag.selected).map(tag => tag.label);
  }
  export function getUpdateTags() {
    return tag_options_t;
  }

  export function validateTags() {
    if (getSelectedTags().length === 0) {
      alert("Please select at least one tag."); 
      return false;
    }
    return true; 
  }


  export function validateInput() {
    if (type_t === "email") {
      // More comprehensive and strict email regex
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
      isValid = emailRegex.test(inputValue) && inputValue.includes('@') && inputValue.includes('.');
    } else if (type_t === "text-name" || type_t === "text-job-title") {
      // Allow letters, spaces, hyphens, and apostrophes for names and job titles
      const nameRegex = /^[a-zA-Z\s'-]+$/;
      isValid = nameRegex.test(inputValue) && inputValue.trim().length > 1; // Require at least 2 characters
    } else if (type_t === "text-company") {
      // Allow alphanumeric characters, spaces, hyphens, periods, and ampersands for company names
      const companyRegex = /^[a-zA-Z0-9\s'&.-]+$/;
      isValid = companyRegex.test(inputValue) && inputValue.trim().length > 1; // Require at least 2 characters
    } else {
      isValid = true;
    }
    sended_ones = true;
    return isValid;
  }
</script>

{#if type_t === "email"}
  <div
    class="text-input-field-container"
  >
    <input 
      type="email"
      id={id_t}
      name={name_t}
      placeholder={placeholder_t}
      bind:value={inputValue}
      on:blur={sended_ones ? validateInput : () => {}}
      class:invalid={!isValid}
    >
  </div>
{:else if type_t === "text-name" || type_t === "text-job-title" || type_t === "text-company"}
  <div
    class="text-input-field-container"
  >
    <input 
      type="text"
      id={id_t}
      name={name_t}
      placeholder={placeholder_t}
      bind:value={inputValue}
      on:blur={sended_ones ? validateInput : () => {}}
      class:invalid={!isValid}
    >
  </div>
{:else if type_t === "date"}
  <div
    class="date-component-holder"
  >
    <input type="text" id={id_t} name={name_t} placeholder={placeholder_t} bind:value={selectedDate} disabled>
    <div class="date-picker-spacer"></div>
    <div
      class="date-input-field-container"
    >
      <DatePicker bind:value={selectedDate} allowPastDates={false} /> 
    </div>
  </div>
{:else if type_t === "tag_list"}
  <div
    class="tag-list-holder"
  >
    {#each tag_options_t as tag, index}
      <button
        on:click={() => toggleTag(index)}
        class:selected={tag.selected}
      >
        {tag.label}
      </button>
    {/each}
  </div>
{:else if type_t === "slider"}
  <div
    class="slider-holder"
  >
    <RangeSlider bind:minRange={minRangeValue_t} bind:maxRange={maxRangeValue_t}/>
  </div>
{:else if type_t === "textarea"}
  <textarea
    placeholder="I'm looking for a ..."
    class="description-textarea"
    bind:value={inputValue}
  ></textarea>
{/if}

<style>
  .text-input-field-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 8%;
  }
  .text-input-field-container input {
    font-size: 25px;
    height: 100%;
    width: 100%;
    color: black;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    font-size: 18px;
    padding-left: 0.8em;
    padding-right: 0.8em;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .text-input-field-container input.invalid {
    border-color: red;
    color: red;
  }
  .date-component-holder {
    display: flex;
    flex-flow: column; 
    width: 100%;
    height: 100%;
  }
  .date-picker-spacer {
    height: 5%;
  }
  .date-component-holder input {
    font-size: 25px;
    height: 10%;
    width: 100%;
    color: black;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    font-size: 18px;
    padding-left: 0.8em;
    padding-right: 0.8em;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
  }
  .date-input-field-container {
    flex-grow: 1;
    width: 100%; 
  }
  .tag-list-holder {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .tag-list-holder button {
    height: 40px;
    padding: 10px 20px;
    margin-bottom: 18px;
    margin-right: 2px;
    margin-left: 2px;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  .tag-list-holder button.selected {
    background-color: black;
    color: white;
  }
  .slider-holder {
    width: 100%;
    height: 100%;
  }
  .slider-holder input {
    width: 100%;
  }
  .description-textarea {
    padding: 10px 20px;
    font-size: 18px;
    width: 100%; 
    height: 100%;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;
    box-sizing: border-box;
    resize: none;
    outline: none;
    font-family: Arial, sans-serif;
  }
</style>
