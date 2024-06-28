<script>
  import DatePicker from "./DatePicker.svelte";
  export let type_t = "text";
  export let id_t = "name";
  export let name_t = "name";
  export let placeholder_t = "What's your name?";

  let selectedDate = "2022-03-01";
</script>

{#if type_t === "text"  || type_t === "email"}
  <div
    class="text-input-field-container"
  >
    <input type={type_t} id={id_t} name={name_t} placeholder={placeholder_t}>
  </div>
{:else if type_t === "date"}
  <div
    class="date-component-holder"
  >
    <input type="text" id={id_t} name={name_t} placeholder={placeholder_t} bind:value={selectedDate}>
    <div class="date-picker-spacer"></div>
    <div
      class="date-input-field-container"
    >
      <DatePicker bind:value={selectedDate} /> 
    </div>
  </div>
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
    border: 2px solid black;
    border-radius: 5px;
    box-sizing: border-box;
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
    border: 2px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
  }
  .date-input-field-container {
    flex-grow: 1;
    width: 100%; 
  }
</style>
