<script>
  import DatePicker from "./DatePicker.svelte";
  export let type_t = "text";
  export let id_t = "name";
  export let name_t = "name";
  export let placeholder_t = "What's your name?";
  export let tag_options_t = [
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

  let tag_labels = ["WebApp", "AI", "Data Science", "Backend Services", "Cloud Solutions", "Marketing", "Web Design"];

  let selectedDate = "2022-03-01";

  function toggleTag(index) {
    tag_options_t = tag_options_t.map((tag, i) => 
      i === index ? {...tag, selected: !tag.selected} : tag
    );
  }

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
{:else}

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
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  .tag-list-holder button.selected {
    background-color: black;
    color: white;
  }
</style>
