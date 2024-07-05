<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import testimage from '$lib/assets/mobiledev.jpg';

    interface Project {
        id: number;
        title: string;
        image: string;
        year: number;
        categories: string[];
        bgColor?: string;
    }

    let projects: Project[] = [
        {
            id: 1,
            title: 'Project 1',
            image: testimage,
            year: 2021,
            categories: ['Web', 'Mobile'],
            bgColor: '#ef7c7c'
        },
        {
            id: 2,
            title: 'Project 2',
            image: testimage,
            year: 2020,
            categories: ['Web', 'AI'],
            bgColor: 'blue'
        },
        {
            id: 3,
            title: 'Project 3',
            image: testimage,
            year: 2019,
            categories: ['Mobile', 'SaaS'],
            bgColor: 'green'
        },
    ];

    let activeCategory: string = 'All';
    let filteredProjects: Project[] = projects;
    let expandedCard: HTMLElement | null = null;
    let isExpanding: boolean = false;
    let expandingProject: Project | null = null;

    function expandCard(event: MouseEvent, project: Project) {
        if (isExpanding) return;
        
        isExpanding = true;
        expandingProject = project;
        const card = (event.currentTarget as HTMLElement);
        expandedCard = card;
       
        card.style.zIndex = '2';
        
        const rect = card.getBoundingClientRect();
        const startX = rect.left + (rect.width / 2);
        const startY = rect.top + (rect.height / 2);

        const overlay = document.querySelector('.expand-overlay') as HTMLElement;
        overlay.style.backgroundColor = project.bgColor || '#000';
        overlay.style.clipPath = `circle(0% at ${startX}px ${startY}px)`;
        overlay.style.display = 'block';

        setTimeout(() => {
            overlay.style.clipPath = `circle(150% at ${startX}px ${startY}px)`;
        }, 50);

        setTimeout(() => {
            card.style.transform = 'translateY(-100vh)';
            setTimeout(() => {
                isExpanding = false;
                expandingProject = null;
                overlay.style.display = 'none';
                card.style.transform = '';
                goto(`/our-work/${project.id}`);
            }, 500);
        }, 500);
    }

    function filterProjects(category: string) {
        activeCategory = category;

        filteredProjects = category === 'All'
            ? projects
            : projects.filter(project => project.categories.includes(category));
    }

    onMount(() => {
        filterProjects('All');
    });
</script>

<div class="our-work-container">
    <div class="top-section">
        <div class="content-container">
            <h1> Here is what we have been building </h1>
            <p>
                The projects we have worked on have been diverse and challenging. 
                We have worked with clients from different industries and have delivered solutions 
                that have helped them achieve their goals.
            </p>
        </div>
    </div>
    <div class="projects-container">
        <div class="category-filter">
            {#each ['All', 'Web', 'Mobile', 'AI', 'SaaS'] as category}
                <button
                    class:active={activeCategory === category}
                    on:click={() => filterProjects(category)}
                >{category}</button>
            {/each}
        </div>
        <span class="divider"/>
        <div class="projects-grid">
            {#each filteredProjects as project}
                <button class="project-card"
                    style="background-color: {project.bgColor}"
                    on:click={(event) => expandCard(event, project)}
                    >
                    <div class="project-card-info">
                        <h3 class="corner top-left">{project.title}</h3>
                         <span class="corner top-right arrow">&rarr;</span>
                         <span class="corner bottom-left">{project.year}</span>
                         <span class="corner bottom-right">
                            {#each project.categories as category}
                                <span class="category">{category}</span>
                            {/each}
                         </span>
                    </div>
                    <div class="project-card-image">
                        <img src={project.image} alt={project.title}/>
                    </div>
                </button>
            {/each}
        </div>
    </div>
</div>

<div class="expand-overlay"></div>

<style>
    .our-work-container {
        position: relative;
        display: flex;
        flex-direction: column;
        color: white;
        justify-content: center;
        align-items: center;
    }

    .top-section {
        font-size: 1rem;
        font-weight: 800;
        text-align: left;
        justify-content: left;
        align-items: left;
    }

    .content-container {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        max-width: 40%;
        padding-left: 10%;
        padding-top: 15%;
        padding-bottom: 5%;
    }

    .content-container h1 {
        font-size: 3rem;
        font-weight: 500;
        text-align: left;
    }

    .content-container p {
        font-size: 1.4rem;
        font-weight: 300;
        text-align: left;
    }

    .projects-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 100%; 
    }

    .category-filter {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.093);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6.1px);
        -webkit-backdrop-filter: blur(6.1px);
        width: fit-content;
        border-radius: 0.6rem;
        gap: 2rem;
        margin-left: 10%;
    }

    .category-filter button {
        padding: 0.7rem;
        border: none;
        border-radius: 0.6rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        background-color: transparent;
        color: #fff;
        transition: background-color 0.3s ease;
    }

    .category-filter button.active {
        background-color: #00ffff6b;
    }

    .divider {
        width: 80%;
        height: 0.01rem;
        background-color: #f5f5f5;
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
        margin-left: 10%;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-radius: 0.6rem;
        margin-bottom: 5%;
    }  

    .project-card {
        position: relative;
        border-radius: 0.6rem;
        overflow: hidden;
        text-align: center;
        color: white;
        transition: transform 0.5s ease, box-shadow 0.3s ease;
        margin-left: 15%;
        margin-right: 15%;
        height: 30rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        box-shadow: none;
    }
    
    .expand-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        transition: clip-path 0.5s ease-out;
        display: none;
    }

    .project-card:hover {
        transform: translateY(-5px);
        cursor: pointer;
    }

    .project-card-info {
        position: relative;
        height: 100%;
    }

    .corner {
        position: absolute;
        font-size: 1rem;
        font-weight: bold;
        padding: 2rem;
    }

    .corner.arrow {
        font-size: 1.5rem;
    }

    .category {
        display: inline-block; 
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem; 
        margin: 0.2rem; 
        background-color: rgba(0, 0, 0, 0.59);
    }

    .top-left {
        top: 0;
        left: 0;
    }

    .top-right {
        top: 0;
        right: 0;
    }

    .bottom-left {
        bottom: 0;
        left: 0;
    }

    .bottom-right {
        bottom: 0;
        right: 0;
    }

    .project-card-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: auto;
    }

    .project-card-image img {
        max-width: 100%;
        border-radius: 0.6rem;
    }

    
</style>
