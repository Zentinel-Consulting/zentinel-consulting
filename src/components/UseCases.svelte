<script lang="ts">
    import educationbkg from '$lib/assets/ChatGPT_Carousel1.webp';
    import retailbkg from '$lib/assets/enterprise.webp';
    import healthcarebkg from '$lib/assets/introducing_the_gpt_store.webp';
    import marketingbkg from '$lib/assets/Navigating_the_Challenges_and_Opportunities_of_Synthetic_Voices.webp';
    import financebkg from '$lib/assets/openai-research-floral-painting.webp';
    import manufacturingbkg from '$lib/assets/practices-for-governing-agentic-ai-systems.webp';
    import { onMount } from 'svelte';

    let services = [
      { id: 1, title: 'Education' },
      { id: 2, title: 'Retail' },
      { id: 3, title: 'Healthcare' },
      { id: 4, title: 'Marketing' },
      { id: 5, title: 'Finance' },
      { id: 6, title: 'Manufacturing' },
    ];

    let servicesSentences = [
        { id: 1, sentences: ['Game development.', 'Data analysis.', 'Data visualization.', 'Platform & tooling.'] },
        { id: 2, sentences: ['Ecommerce.', 'Inventory management.', 'Customer service.', 'Supply chain management.'] },
        { id: 3, sentences: ['EHR.', 'Eprescription software.', 'Patient management.'] },
        { id: 4, sentences: ['Digital marketing.', 'Social media marketing.', 'Content marketing.', 'Email marketing.'] },
        { id: 5, sentences: ['Banking.', 'Insurance.', 'Investment.', 'Accounting.'] },
        { id: 6, sentences: ['Inventory management.', 'Supply chain management.', 'Quality control.', 'Customer service.']},
    ];

    let servicesImages = [
        { id: 1, image: educationbkg },
        { id: 2, image: retailbkg },
        { id: 3, image: healthcarebkg },
        { id: 4, image: marketingbkg },
        { id: 5, image: financebkg },
        { id: 6, image: manufacturingbkg },
    ];

    let current = 0;
    let carousel: HTMLElement;
    let leftButton: HTMLButtonElement;
    let rightButton: HTMLButtonElement;

    onMount(() => {
        carousel = document.querySelector('.carousel') as HTMLElement;
        leftButton = document.getElementById('move-left') as HTMLButtonElement;
        rightButton = document.getElementById('move-right') as HTMLButtonElement;
        updateButtonStates();
    });
    
    function moveCarousel(direction: string) {
        if (!carousel) return;

        const items = carousel.querySelectorAll('.carousel-item');
        const itemWidth = (items[0] as HTMLElement).offsetWidth;
        const containerWidth = carousel.offsetWidth;
        const visibleItems = Math.floor(containerWidth / itemWidth);
        const maxScroll = Math.max(0, items.length - visibleItems);

        if (direction === 'left') {
            current = Math.max(current - 1, 0);
        } else {
            current = Math.min(current + 1, maxScroll);
        }

        let scrollPosition = current * itemWidth;
        if (current === maxScroll) {
            scrollPosition = carousel.scrollWidth - containerWidth;
        }

        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        updateButtonStates();
    }

    function updateButtonStates() {
        if (!carousel || !leftButton || !rightButton) return;

        const items = carousel.querySelectorAll('.carousel-item');
        const itemWidth = (items[0] as HTMLElement).offsetWidth;
        const containerWidth = carousel.offsetWidth;
        const visibleItems = Math.floor(containerWidth / itemWidth);
        const maxScroll = Math.max(0, items.length - visibleItems);

        leftButton.disabled = current === 0;
        rightButton.disabled = current >= maxScroll;
    }


</script>


<div class="projects-container">
    <div class="sub-container-project" id="projects-start">
        <div class="title-container">
            <h2>Explore Our Use Cases</h2>
            <div class="buttons-move-carousel">
                <button class="button-move-carousel" id="move-left"
                    on:click={() => moveCarousel('left')}
                >
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </button>
                <button class="button-move-carousel" id="move-right"
                    on:click={() => moveCarousel('right')}
                >
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="carousel">
            {#each services as service, index}
                <div class="carousel-item" class:start={index === 0} style="background-image: url({servicesImages.find(s => s.id === service.id)?.image});
                    background-size: cover;
                    ">
                    <div class="title">{service.title}</div>
                    <ul class="sentences">
                        {#each (servicesSentences.find(s => s.id === service.id)?.sentences ?? []) as sentence}
                            <li>{sentence}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</div>


<style>
    .projects-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        background-color: transparent;
        z-index: 10;
    }

    .sub-container-project {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        padding-bottom: 6rem;
        padding-top: 6rem;
        background-color: white;
        border-radius: 1.2rem;
        overflow: hidden;
    }

    .title-container {
        width: 100%;
        text-align: left;
        display: flex;
        justify-content: space-between;
    }

    h2 {
        font-size: 1.4rem;
        font-weight: 500;
        color: #0b0b0b;
        margin-bottom: 1rem;
        margin-left: 12rem;
    }

    .buttons-move-carousel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 10rem;
    }

    .button-move-carousel {
        background-color: transparent;
        color: black;
        border: none;
        font-size: 1.8rem;
        display: flex;
        padding-left: 1rem;
        align-items: center;
        cursor: pointer;
    }

    .button-move-carousel:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .carousel {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        height: 520px;
        padding: 1rem 0;
        scrollbar-width: none;
        -ms-overflow-style: none;

    }

    .carousel-item {
        flex: 0 0 20%;
        scroll-snap-align: start;
        margin-right: 20px;
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .carousel-item:hover {
        transform: scale(1.05);
        transition: transform 0.3s;
    }

    .carousel-item.start {
        margin-left: 12rem;
    }

    .title {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        font-weight: 500;
        color: black;
        font-size: 1.2rem;
    }

    .sentences {
        list-style: none;
        padding: 0;
        visibility: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 100%;
        color: black;
    }

    .carousel-item:hover .sentences {
        visibility: visible;
    }

    .carousel-item li {
        margin-bottom: 0.5rem;
        color: black;
    }



     @media (max-width: 768px) {
        .projects-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .sub-container-project {
            height: 80%;
        }

        .title-container {
            flex-direction: column;
            align-items: center;
            margin-top: 1rem;
        }

        h2 {
            margin-left: 0;
        }

        .buttons-move-carousel {
            visibility: hidden;
        }

        .carousel {
            height: 100%;
        }

        .carousel-item {
            flex: 0 0 50%;
            margin-right: 2rem;
            margin-bottom: 1rem;
        }

        .carousel-item.start {
            margin-left: 5rem;
        }

        .title {
            font-size: 1.4rem;
            font-weight: 500;
        }

        .sentences {
            visibility: visible; 
            position: relative; 
            top: auto;
            left: auto;
            transform: none;
        }

        .carousel-item li {
            font-size: 1.1rem;
            background-color: rgba(255, 255, 255, 0.744);
        }

    }
</style>
