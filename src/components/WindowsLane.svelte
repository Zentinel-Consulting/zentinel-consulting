<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import window_green from "$lib/assets/window_green.png";
  import window_orange from "$lib/assets/window_orange.png";
  import window_blue from "$lib/assets/window_blue.png";

  let windowsLane;
  let rows = [];
  let scrollPosition = 0;
  let autoScrollInterval;
  let mouseY = 0;
  const windowTypes = [window_green, window_orange, window_blue];
  const scrollSpeed = 0.001;

  function generateRow() {
    const maxElements = 6;
    const minElements = 3;
    const totalElements = Math.floor(Math.random() * (maxElements - minElements + 1)) + minElements;
    const row = [];
    
    for (let i = 0; i < totalElements; i++) {
      const isWindow = Math.random() < 0.5; // 50% chance of being a window
      const width = Math.floor(Math.random() * 20) + 10; // Random width between 10% and 30%
      
      if (isWindow) {
        const windowType = windowTypes[Math.floor(Math.random() * windowTypes.length)];
        row.push({ type: 'window', src: windowType, width: `${width}%` });
      } else {
        row.push({ type: 'spacer', width: `${width}%` });
      }
    }
    return row;
  }

  function addRow(position = 'bottom') {
    const newRow = generateRow();
    if (position === 'top') {
      rows = [newRow, ...rows];
    } else {
      rows = [...rows, newRow];
    }
  }

  function removeRow(position = 'top') {
    if (position === 'top') {
      rows = rows.slice(1);
    } else {
      rows = rows.slice(0, -1);
    }
  }

  function handleScroll(event) {
    if (!browser) return;
    const { clientHeight, scrollHeight, scrollTop } = event.target;
    const middlePoint = clientHeight / 2;

    if (mouseY < middlePoint) {
      scrollPosition -= scrollSpeed;
      if (scrollPosition <= 0) {
        addRow('top');
        removeRow('bottom');
        scrollPosition = 1;
      }
    } else {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= rows.length - 1) {
        addRow('bottom');
        removeRow('top');
        scrollPosition = rows.length - 2;
      }
    }

    windowsLane.scrollTop = scrollPosition * (scrollHeight / rows.length);
  }

  function autoScroll() {
    if (!browser || !windowsLane) return;
    handleScroll({ target: windowsLane });
  }

  function handleMouseMove(event) {
    mouseY = event.clientY;
  }

  onMount(() => {
    if (!browser) return;
    for (let i = 0; i < 10; i++) {
      addRow();
    }
    autoScrollInterval = setInterval(autoScroll, 16); // ~60 fps
    window.addEventListener('mousemove', handleMouseMove);
  });

  onDestroy(() => {
    if (!browser) return;
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
    window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<div class="windows-lane" bind:this={windowsLane} on:scroll={handleScroll}>
  {#each rows as row, index}
    <div class="windows-row">
      {#each row as element}
        {#if element.type === 'window'}
          <img src={element.src} alt="Window" />
        {:else}
          <div class="spacer"></div>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .windows-lane {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    position: relative;
  }
  .windows-lane::-webkit-scrollbar {
    display: none;
  }
  .windows-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    height: 25%;
  }
  .windows-row img, .windows-row .spacer {
    flex: 1;
    height: 80%;
  }
  .windows-row img {
    object-fit: contain;
  }
  .windows-lane::before,
  .windows-lane::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 100px;
    pointer-events: none;
  }
  .windows-lane::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  }
  .windows-lane::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
  }
</style>
