<script lang="ts">
    import { onMount } from 'svelte';
    import Service from './Service.svelte';
  
    let rightContent: HTMLElement;
    let isLeftSectionIntersecting = false;
  
    onMount(() => {
        const leftStickyElement = document.querySelector('.left-sticky') as HTMLElement;
        if (leftStickyElement) {
            const observer = new IntersectionObserver(
            (entries) => {
                isLeftSectionIntersecting = entries[0].isIntersecting;
            },
            { threshold: 1 }
            );
            observer.observe(leftStickyElement);
        }
    });

    let services = [
        {
            title: 'Web development',
            points: ['Svelte', 'React', 'Responsive design', 'Node.js', 'TypeScript', 'SEO optimization', 'E-commerce', 'Web applications', 'APIs']
        },
        {
            title: 'Mobile development',
            points: ['iOS', 'Android', 'React Native', 'Swift', 'Kotlin', 'Mobile applications', 'APIs']
        },
        {
            title: 'AI solutions',
            points: ['Machine learning', 'Deep learning', 'Computer vision', 'Natural language processing', 'Data analysis']
        },
        {
            title: 'Data analysis',
            points: ['Data visualization', 'Data cleaning', 'Data processing', 'Data analysis', 'Data interpretation']
        },
    ];

  </script>
  
  <div class="services-container">
    <div class="left-sticky">
      <div class="text-title">
        <span> We aim to build <span class="highlight-1"> innovative </span> and <span class="highlight-2"> powerful </span> solutions </span>
      </div>
      <div class="start-button">
        <button> Start a project &rarr; </button>
      </div>
    </div>
  
    <div class="right-content" bind:this={rightContent} class:scrollable={isLeftSectionIntersecting}>
        {#each services as service, i}
            <Service title={service.title} points={service.points} />
        {/each}
    </div>
  </div>


<style>
    .services-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
        border-radius: 2rem;
    }

    .left-sticky {
        position: sticky;
        top: 0;
        width: 30%;
        height: 100vh;
        background-color: white;
    }

    .text-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%; 
        height: 70%;
        color: black;
        font-size: 2rem;
        margin: auto; 
    }

    .highlight-1 {
        color: #ff00ff;
    }

    .highlight-2 {
        color: #00ff00;
    }

    .start-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
    }

    .start-button button {
        background-color: transparent;
        border-width: 2px;
        border-style: solid;
        border-color: black;
        border-radius: 10rem;
        padding: 1rem 2rem;
        cursor: pointer;
        color: black;
        font-size: 1.2rem;
    }

    .start-button button:hover {
        background-color: black;
        color: white;
    }

    .right-content {
        width: 70%;
        height: 100vh;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .right-content.scrollable {
        overflow-y: scroll;
    }

    .right-content::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        .services-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .left-sticky {
            width: 100%;
            height: 30%;
        }

        .text-title {
            width: 80%;
            height: 30%;
            font-size: 1.5rem;
            margin-top: 1.5rem;
        }

        .start-button {
            height: 10%;
        }

        .start-button button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            margin-top: 5rem;
            margin-bottom: 1rem;
        }

        .right-content {
            width: 100%;
            height: 70%;
        }
    }
</style>