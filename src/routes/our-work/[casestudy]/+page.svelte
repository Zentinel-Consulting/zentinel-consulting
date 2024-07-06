<script lang="ts">
        import { onMount } from 'svelte';
        import { fly } from 'svelte/transition';
        import testimage from '$lib/assets/mobiledev.jpg';
        import { page } from '$app/stores';

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

        const casestudy = +$page.params.casestudy;

        onMount(() => {
            projects.forEach((project) => {
                const img = new Image();
                img.src = project.image;
            });
        })
</script>


<div class="case-study-container"
     style="background-color: {projects.find(p => p.id === casestudy)?.bgColor};"
>
    <div class="test"
        in:fly={{ duration: 300, y: 200 }}    
    >
        {casestudy}
    </div>
</div>


<style>
    .case-study-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 2rem;
        font-weight: 800;
        color: white;
    }

    .test {
        color: white;
    }
</style>