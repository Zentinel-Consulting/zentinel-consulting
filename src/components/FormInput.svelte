<script>
  export let id_t = "name";
  export let name_t = "name";
  export let placeholder_t = "Name";
</script>

<div
  class="text-input-field-container"
>
  <input type="text" id={id_t} name={name_t} placeholder={placeholder_t}>
</div>

<style>
  .text-input-field-container {
    width: 100%;
    height: 8%;
    background-color: #D9D9D9;
  }
  .text-input-field-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 7px;
  }
  .text-input-field-container input {
    font-size: 25px;
    height: 100%;
    width: 90%;
    color: white;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
  }
</style>
