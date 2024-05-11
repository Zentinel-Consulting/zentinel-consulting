<script lang="ts">
    import UseCases from "./UseCases.svelte";

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
        { id: 2, sentences: ['Retail is detail.', 'Retail is the sale of goods to consumers.'] },
        { id: 3, sentences: ['Healthcare is the maintenance or improvement of health.', 'Healthcare is the organized provision of medical care to individuals.'] },
        { id: 4, sentences: ['Marketing is the process of promoting products or services.', 'Marketing is the action or business of promoting and selling products or services.'] },
        { id: 5, sentences: ['Finance is the management of money.', 'Finance is the science of managing money.'] },
        { id: 6, sentences: ['Manufacturing is the production of goods.', 'Manufacturing is the making of goods by manual labor or by machinery.'] },
    ];

    // let servicesImages = [
    //     { id: 1, image: './plain-black.jpg' },
    //     { id: 2, image: './plain-black.jpg' },
    //     { id: 3, image: './plain-black.jpg' },
    //     { id: 4, image: './plain-black.jpg' },
    //     { id: 5, image: './plain-black.jpg' },
    //     { id: 6, image: './plain-black.jpg' },
    
    // ];
</script>


<div class="projects-container">
    <div class="sub-container-project" id="projects-start">
        <div class="top-sections">  
            <h1 class="title-explore">Explore Use Cases</h1>
            <button> Explore our projects &rarr; </button>
        </div>
        <div class="tiles">
            <UseCases {services} {servicesSentences}/>
        </div>
    </div>
</div>


<style>
    .projects-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-end; 
        height: 100vh;
        background-color: transparent;
        z-index: 10;
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
        height: 80vh;;
     }

     @media (max-width: 768px) {
        .projects-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .sub-container-project {
            height: 100%;
        }

        .top-sections {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 10%;
        }

        .top-sections h1 {
            margin-bottom: 0.5rem;
            font-size: 2rem;
        }

        .top-sections button {
            margin-top: 1rem;
        }
    }




</style>
