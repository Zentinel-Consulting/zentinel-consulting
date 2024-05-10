<script lang="ts">
    import { tick } from 'svelte';
    import { gsap } from "gsap/dist/gsap";
    import { Flip } from 'gsap/dist/Flip';
    import UseCase from './UseCase.svelte';
    
    gsap.registerPlugin(Flip);
    
    let selected = 1;
    
    async function flip(id: number) {
      const state = Flip.getState('.grid-item');
      
      selected = id;

      await tick();

      Flip.from(state, {
        duration: 0.6,
        stagger: 0.04,
        absolute: true,
      });
    }
    
    let services = [
      { id: 1, title: 'Education' },
      { id: 2, title: 'Retail' },
      { id: 3, title: 'Healthcare' },
      { id: 4, title: 'Marketing' },
      { id: 5, title: 'Finance' },
      { id: 6, title: 'Manufacturing' },
    ];

    let servicesSentences = [
        { id: 1, sentences: ['Education is the key to success.', 'Education is the passport to the future.'] },
        { id: 2, sentences: ['Retail is detail.', 'Retail is the sale of goods to consumers.'] },
        { id: 3, sentences: ['Healthcare is the maintenance or improvement of health.', 'Healthcare is the organized provision of medical care to individuals.'] },
        { id: 4, sentences: ['Marketing is the process of promoting products or services.', 'Marketing is the action or business of promoting and selling products or services.'] },
        { id: 5, sentences: ['Finance is the management of money.', 'Finance is the science of managing money.'] },
        { id: 6, sentences: ['Manufacturing is the production of goods.', 'Manufacturing is the making of goods by manual labor or by machinery.'] },
    ];

    let servicesImages = [
        { id: 1, image: 'https://i.pinimg.com/originals/24/22/32/24223276aba1bd1f91190a745023e469.gif' },
        { id: 2, image: 'https://media.tenor.com/9vRAkntogEMAAAAd/background.gif' },
        { id: 3, image: 'https://media0.giphy.com/media/3o7qDNfxtNRtLVv8qs/giphy.gif?cid=6c09b95208blly7ld3tvwkmj5tddrkdjfezzj4hicd4om0l4&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' },
        { id: 4, image: 'https://i.pinimg.com/originals/61/44/2f/61442f2241fc5abce9a83f053b0b904a.gif' },
        { id: 5, image: 'https://cdn.dribbble.com/users/869467/screenshots/2662113/media/3475c0231dc929eec90ee40874ba20c1.gif' },
        { id: 6, image: 'https://i.pinimg.com/originals/27/e2/62/27e26205db49226a2efc3fe01c792f8d.gif' },
    
    ];
</script>


<div class="projects-container">
    <div class="sub-container-project" id="projects-start">
        <div class="top-sections">
            <h1 class="title-explore">Explore Use Cases</h1>
            <button> Explore our projects &rarr; </button>
        </div>
        <div class="tiles">
            <div class="grid">
                {#each services as service}
                    <UseCase id={service.id} selected={selected} flip={flip} titleService={service.title} servicesSentences={servicesSentences} servicesImages={servicesImages}/>
                {/each}
            </div>
        </div>
    </div>
</div>


<style>
    .projects-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-end; 
        height: 100vh;
        background-color: rgb(0, 0, 0);
    }

    .sub-container-project {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 95%;
        padding-bottom: 2rem;
        background-color: white;
        border-radius: 2rem;
    }

    .top-sections {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 85%;
        height: 5%;
        color: black;
        padding-top: 2rem;
        margin-bottom: 2rem;
    }

    .top-sections button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: black;
        font-size: 1.2rem;
        text-decoration: underline;
        text-decoration-color: black;
        text-decoration-style: solid;
        text-decoration-thickness: 0.1rem;
        text-underline-offset: 0.5rem;
    }

    .top-sections h1 {
        font-size: 2.2rem;
        color: black;
    }

    .tiles {
        position: relative;
        width: 90%;
        padding: 0;
        height: 80vh;
     }

     .grid {
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        gap: 0.5rem;
        grid-template-columns: repeat(2, 2fr);
        width: 100%;
        height: 100%;
    }

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}


	h1 {
		color: hsl(0 0% 98%);
		font-size: 2rem;
		text-transform: capitalize;
	}

</style>
