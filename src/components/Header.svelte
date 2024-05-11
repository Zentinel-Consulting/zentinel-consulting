<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

  
    let visible = false;
    let isOpen = false;
    let hidden = false;

    onMount(() => {
      visible = true;
    });
    
    const toggleModal = () => {
      isOpen = !isOpen;
    };
 
  </script>
  
  <header class="header">
    <div class="header-casing">
      {#if visible}
        <div in:fly={{ x: -200, duration: 2000 }} out:fade>
          <button>
              <svg width="50" height="50" viewBox="0 0 70 70" fill="white" xmlns="http://www.w3.org/2000/svg" style="background-color:transparent;">
                  <path d="M49.9399 10.3376L52.7851 13.2236L13.9422 52.5244L11.097 49.6384L49.9399 10.3376Z"/>
                  <path d="M56.5219 17.4756L59.3671 20.3616L20.5242 59.6624L17.6789 56.7764L56.5219 17.4756Z"/>
                  <path d="M59.2841 55.5452V59.6241H34.4552V55.5452H59.2841Z"/>
                  <path d="M35.4618 11.6972V15.7761H10.6329V11.6972H35.4618Z"/>
              </svg>
          </button>
        </div>
      <div in:fly={{ x: 200, duration: 2000 }} out:fade>
        <button on:click={toggleModal}>
          {#if isOpen}
            <svg width="30" height="30" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 
              512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 
              512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"/>
            </svg>
          {:else}
            <svg width="35" height="35" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M160 448a32 32 0 01-32-32V160.064a32 32 0 0132-32h256a32 32 0 0132 32V416a32 32 0 01-32 
              32H160zm448 0a32 32 0 01-32-32V160.064a32 32 0 0132-32h255.936a32 32 0 0132 32V416a32 32 0 01-32 32H608zM160 
              896a32 32 0 01-32-32V608a32 32 0 0132-32h256a32 32 0 0132 32v256a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V608a32 
              32 0 0132-32h255.936a32 32 0 0132 32v256a32 32 0 01-32 32H608z"/>
            </svg>
          {/if}
        </button>
      </div>
    {/if}
    </div>
  </header>
  
{#if isOpen}
    <div in:fly={{y:-100, duration: 1000 }} out:fade class="modal-menu">
        <div class="menu-items">
          <a href="/" class="menu-nav-link">
              <span class="link-text">Services</span>
              <span class="arrow">&larr;</span>
          </a>
          <a href="/" class="menu-nav-link">
              <span class="link-text">Projects</span>
              <span class="arrow">&larr;</span>
          </a>
          <a href="/" class="menu-nav-link">
              <span class="link-text">Process</span>
              <span class="arrow">&larr;</span>
          </a>
          <a href="/" class="menu-nav-link">
              <span class="link-text">Why Zentinel</span>
              <span class="arrow">&larr;</span>
          </a>
      </div>
    </div>
{/if}

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 3vh;
        z-index: 100; 
        padding-top: 2rem;  
    }

    .header-casing {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        backdrop-filter: blur(7px);
        background-color: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-radius: 10rem;
        -webkit-backdrop-filter: blur(7px);
    }

    .header-casing button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .modal-menu {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgb(0, 0, 0);
        backdrop-filter: blur(10px);
        z-index: 99;
        margin-top: 0vh;
        width: 100%;
    }

    .menu-items {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        height: auto;
        width: 100%;
        font-size: 2.5rem;
        text-align: right;
        margin-right: 6rem;
        margin-bottom: 10rem;
        /* remove underline */
        text-decoration: none;
    }

    .menu-nav-link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;
        color: white;
        background-color: transparent;
        text-align: right;
        transition: transform 0.3s ease-in-out;
        text-decoration: none;
    }

    .link-text {
        margin-right: 1rem;
        text-decoration: none;
    }

    .arrow {
      opacity: 0;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .menu-nav-link:hover {
        transform: translateX(-1rem);
    }

    .menu-nav-link:hover .arrow {
        opacity: 1;
        transform: translateX(1rem);
    }


    @media (min-width: 640px) {
        .menu-nav-link {
            width: 75%;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 3rem;
            text-align: right;
        }
        
    }

    @media (min-width: 768px) {
        .menu-nav-link {
            width: 66.666667%;
            margin-bottom: 4rem;
        }
    }

    @media (min-width: 1024px) {
        .menu-nav-link {
            width: 50%;
        }
    }

    @media (max-width: 768px) {
        .header {
            padding-left: 0rem;
            padding-right: 0rem;
            padding-top: 3rem;
        }

        .header-casing {
            width: 80%;
        }

        .modal-menu {
            width: 100%;
        }

        .menu-items {
          margin-bottom: 5rem;
          margin-right: 0;
        }
    }
</style>