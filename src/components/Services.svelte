<script lang="ts">
    import aIimage from '$lib/assets/abstract.jpg';
    import webdev from '$lib/assets/webdev.jpg';
    import mobiledev from '$lib/assets/mobiledev.jpg';
    import dataanalysis from '$lib/assets/dataanalysis.webp';

    import Service from './Service.svelte';

    let services = [
        {
            title: 'Web development',
            points: ['Svelte', 'React', 'Responsive design', 'Node.js', 'TypeScript', 'SEO optimization', 'E-commerce', 'Web applications', 'APIs'],
            image: webdev
        },
        {
            title: 'Mobile development',
            points: ['iOS', 'Android', 'React Native', 'Swift', 'Kotlin', 'Mobile applications', 'APIs'],
            image: mobiledev
        },
        {
            title: 'AI solutions',
            points: ['Machine learning', 'Deep learning', 'Computer vision', 'Natural language processing', 'Data analysis'],
            image: aIimage
        },
        {
            title: 'Data analysis',
            points: ['Data visualization', 'Data cleaning', 'Data processing', 'Data analysis', 'Data interpretation'],
            image: dataanalysis
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
  
    <div class="right-content">
        {#each services as service, i}
            <Service title={service.title} points={service.points} image={service.image} />
        {/each}
    </div>
  </div>


<style>
    .services-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 97vh;
        background-color: #f5f5f5;
        border-radius: 2rem;
    }

    .left-sticky {
        position: sticky;
        top: 0;
        width: 30%;
        height: 97vh;
        border-top-left-radius: 2rem;
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
        position: relative;
        overflow: hidden;
        transition: color 0.3s;
    }

    .start-button button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: black;
        transition: width 0.3s;
        z-index: -1;
    }

    .start-button button:hover {
        color: white;
    }

    .start-button button:hover::before {
        width: 100%;
    }

    .right-content {
        width: 70%;
        height: 97vh;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
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