<script>
  export let minRange = 50;
  export let maxRange = 1000;
  const minRangeValueGap = 6;
  const max = 1000;

  $: rangeStyle = `left: ${(minRange / max) * 100}%; right: ${100 - (maxRange / max) * 100}%`;
  $: minBubbleStyle = `left: ${(minRange / max) * 100}%; transform: translate(-${(minRange / max) * 50}%, -100%)`;
  $: maxBubbleStyle = `right: ${100 - (maxRange / max) * 100}%; transform: translate(${(100 - (maxRange / max) * 100) / 2}%, 100%)`;

  function handleInput(event) {
    const { target } = event;
    if (target.classList.contains('min')) {
      if (maxRange - minRange < minRangeValueGap) {
        minRange = maxRange - minRangeValueGap;
        target.style.zIndex = "2";
      }
    } else {
      if (maxRange - minRange < minRangeValueGap) {
        maxRange = minRange + minRangeValueGap;
        target.style.zIndex = "2";
      }
    }
  }
</script>

<div class="double_range_slider_box">
  <div class="double_range_slider">
    <span class="range_track" style={rangeStyle}></span>
    <input type="range" class="min" min="0" max={max} bind:value={minRange} on:input={handleInput} />
    <input type="range" class="max" min="0" max={max} bind:value={maxRange} on:input={handleInput} />
    <div class="minvalue" style={minBubbleStyle}>{minRange} USD</div>
    <div class="maxvalue" style={maxBubbleStyle}>{maxRange} USD</div>
  </div>
</div>

<style>
  /* CSS styles here (same as provided) */
  .double_range_slider_box {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .double_range_slider {
    width: 90%;
    height: 2px;
    position: relative;
    background-color: #D9D9D9;
    border-radius: 1px;
  }
  .range_track {
    height: 100%;
    position: absolute;
    border-radius: 1px;
    background-color: black;
  }
  .minvalue, .maxvalue {
    position: absolute;
    padding: 6px 15px;
    background:black;
    border-radius: 20px;
    color: white;
    font-size: 1rem;
    transition: left 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), right 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: left, right, transform;
  }
  .minvalue {
    bottom: 0;
    left: 0;
  }
  .maxvalue {
    top: 0;
    right: 0;
  }
  input {
    position: absolute;
    width: 100%;
    height: 5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    top: 50%;
    transform: translateY(-50%);
  }
  input::-webkit-slider-thumb {
    height: 3px;
    width: 3px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: black;
    pointer-events: auto;
    -webkit-appearance: none;
    cursor: pointer;
    margin-bottom: 1px;
  }
  input::-moz-range-thumb {
    height: 7px;
    width: 7px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: black;
    pointer-events: auto;
    -moz-appearance: none;
    cursor: pointer;
    margin-top: 30%;
  }
</style>
