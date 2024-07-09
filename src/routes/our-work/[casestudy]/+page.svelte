<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { page } from '$app/stores';
    import { Undo2, ExternalLink } from 'lucide-svelte';
    import testimage from '$lib/assets/andromeda-1.png';

    interface Project {
        id: number;
        title: string;
        image: string;
        year: number;
        categories?: string[]; 
        bgColor?: string;
        company?: string;
        duration?: string;
        description?: string;
    }

    let projects: Project[] = [
        {
            id: 1,
            title: 'Andromeda Adventure',
            image: testimage,
            year: 2023,
            categories: ['Web', 'Mobile', 'AR Game'],
            bgColor: '#ef7c7c',
            company: 'Novus - Institute for the Future of Education, Tecnológico de Monterrey',
            duration: '6 months',
            description: 'Andromeda Adventure is an augmented reality game that aims to teach children about the solar system and the planets. The game is designed to be played in a classroom setting, where students can explore the solar system and learn about the planets in a fun and interactive way.\n\nThe game uses augmented reality technology to bring the planets to life, allowing students to see and interact with the planets in 3D. The game also includes quizzes and challenges to test students’ knowledge and reinforce what they have learned.'
        },
    ];

    function goBack() {
        window.history.back();
    }

    const casestudy = +$page.params.casestudy;
    let isLoaded = false;

    onMount(() => {
        const project = projects.find(p => p.id === casestudy);

        if (project) {
            document.body.style.backgroundColor = project.bgColor || '#000';
        }

        const clone = document.querySelector('.project-card[style*="position: fixed"]');
        const overlay = document.querySelector('div[style*="position: fixed"]');
        if (clone) clone.remove();
        if (overlay) overlay.remove();

        document.body.style.overflow = '';

        isLoaded = true;

        projects.forEach((project) => {
            const img = new Image();
            img.src = project.image;
        });
    });
</script>

<div class="case-study-container" 
    style="background-color: {projects.find(p => p.id === casestudy)?.bgColor || '#000'}"
>
    {#if isLoaded}
        <div class="content" in:fly={{ duration: 300, y: 200 }}>
            <div class="top-buttons">
                <button class="project-button"
                    on:click={goBack}
                >
                    <Undo2 size="24" />
                </button>
                <button class="project-button"> 
                    <ExternalLink size="24" />    
                </button>
            </div>
            <div class="project-title">
                {projects.find(p => p.id === casestudy)?.title}
            </div>
            <div class="company">
                {projects.find(p => p.id === casestudy)?.company}
            </div>
            <div class="project-image">
                <img src="{projects.find(p => p.id === casestudy)?.image}" alt="Project Image" aria-hidden="true" />
            </div>
        </div>
    {/if}
</div>
<div class="project-info-container">
    <div class="content-info">
        <div class="first-half">
            <div class="project-company">
                {projects.find(p => p.id === casestudy)?.company}
            </div>
            <div class="project-title-below">
                {projects.find(p => p.id === casestudy)?.title}
            </div>
            <div class="project-description">
                {@html projects.find(p => p.id === casestudy)?.description?.replace(/\n/g, '<br>')}
            </div>
        </div>
        <div class="second-half">
            <div class="project-year">
                <h2> Year </h2>
                {projects.find(p => p.id === casestudy)?.year}
            </div>
            <div class="project-duration">
                <h2> Duration </h2>
                ~ {projects.find(p => p.id === casestudy)?.duration}
            </div>
            <div class="project-categories">
                <h2> Categories </h2>
                {#each projects.find(p => p.id === casestudy)?.categories ?? [] as category} 
                    <span class="category">{category}</span>
                {/each}
            </div>
        </div>
    </div>
    <span class="divider" />
    <div class="project-image">
        <img src="{projects.find(p => p.id === casestudy)?.image}" alt="Project Image" aria-hidden="true" />
    </div>
</div>

<style>
    .case-study-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 2rem;
        font-weight: 800;
        position: fixed;
        height: auto;
        overflow-y: auto;
        z-index: 1;
        width: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-top: 8%;
    }

    .top-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;
    }

    .project-button {
        border: none;
        cursor: pointer;
        color: rgb(255, 255, 255);
        padding: 1rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .project-button:hover{
        background-color: rgba(255, 255, 255, 0.3);
    }

    .project-title {
        font-size: 6rem;
        font-weight: 500;
        margin-top: 2rem;
        width: 50%;
        text-align: left;
    }

    .company {
        font-size: 2rem;
        font-weight: 300;
        margin-top: 5rem;
        width: 50%;
        text-align: left;
    }

    .project-image {
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 8rem;
        margin-bottom: 8rem;
        overflow: hidden;
    }

    .project-image img {
        width: 70%;
        height: auto;
        border-radius: 1rem;
    }

    .project-info-container {
        display: flex;
        justify-content: top;
        align-items: center;
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        color: black;
        position: relative;
        z-index: 2;
        margin-top: 100vh;
    }

    .content-info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .first-half {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 70%;
        padding: 10rem;
    }

    .project-company {
        font-size: 2rem;
        font-weight: 300;
        width: 80%;
        text-align: left;
    }

    .project-title-below {
        font-size: 5rem;
        font-weight: 500;
        margin-top: 2rem;
        width: 100%;
        text-align: left;
    }

    .project-description {
        font-size: 1.5rem;
        font-weight: 300;
        margin-top: 2rem;
        width: 70%;
        text-align: left;
    }

    .second-half {
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: left;
        width: 30%;
        height: 100%;
    }

    .project-year {
        font-size: 1.2rem;
        font-weight: 300;
        margin-top: 2rem;
        width: 100%;
        text-align: left;
    }

    .project-duration {
        font-size: 1.2rem;
        font-weight: 300;
        margin-top: 2rem;
        width: 100%;
        text-align: left;
    }

    .project-categories {
        font-size: 1.2rem;
        font-weight: 300;
        margin-top: 2rem;
        width: 100%;
        text-align: left;
    }

    .category {
        font-size: 1rem;
        font-weight: 300;
        margin-right: 1rem;
        padding: 0.5rem;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
    }

    .divider {
        width: 80%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
        margin-top: 1rem;
    }

    .project-image img {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-radius: 2rem;
    }
    
    @media (max-width: 1200px) {
        .project-title, .project-title-below {
            font-size: 4rem;
        }
        
        .company, .project-company {
            font-size: 1.5rem;
        }
        
        .first-half {
            padding: 5rem;
        }
    }

    @media (max-width: 992px) {
        .content-info {
            flex-direction: column;
        }
        
        .first-half, .second-half {
            width: 90%;
            padding: 2rem;
        }
        
        .project-description {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .content {
            margin-top: 20%;
        }

        .project-title, .project-title-below {
            font-size: 3rem;
            width: 80%;
        }
        
        .company, .project-company {
            font-size: 1.2rem;
            width: 80%;
        }
        
        .project-image img {
            width: 90%;
        }
        
        .top-buttons {
            width: 90%;
        }
    }

    @media (max-width: 576px) {
        .project-title, .project-title-below {
            font-size: 2.5rem;
        }
        
        .project-description {
            font-size: 1.2rem;
        }
        
        .category {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
    }

    @media (max-width: 480px) {
        .project-title, .project-title-below {
            font-size: 2rem;
        }
        
        .company, .project-company {
            font-size: 1rem;
        }
        
        .project-description {
            font-size: 1rem;
        }
    }
   
    
</style>