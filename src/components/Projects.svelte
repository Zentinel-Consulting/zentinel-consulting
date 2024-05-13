<script lang="ts">
    import UseCases from "./UseCases.svelte";
    import educationbkg from '$lib/assets/education.png';
    import retailbkg from '$lib/assets/retail.png';
    import healthcarebkg from '$lib/assets/healthcare.png';
    import financebkg from '$lib/assets/finance.png';
    import marketingbkg from '$lib/assets/marketing.png';
    import manufacturingbkg from '$lib/assets/manufacturing.png';

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
        { id: 2, sentences: ['Ecommerce', 'Inventory management', 'Customer service', 'Supply chain management.'] },
        { id: 3, sentences: ['EHR', 'Eprescription software', 'Patient management'] },
        { id: 4, sentences: ['Digital marketing', 'Social media marketing', 'Content marketing', 'Email marketing'] },
        { id: 5, sentences: ['Banking', 'Insurance', 'Investment', 'Accounting'] },
        { id: 6, sentences: ['Inventory management', 'Supply chain management', 'Quality control', 'Customer service']},
    ];

    let servicesImages = [
        { id: 1, image: educationbkg },
        { id: 2, image: retailbkg },
        { id: 3, image: healthcarebkg },
        { id: 4, image: marketingbkg },
        { id: 5, image: financebkg },
        { id: 6, image: manufacturingbkg },
    
    ];
</script>


<div class="projects-container">
    <div class="sub-container-project" id="projects-start">
        <div class="top-sections">  
            <h1 class="title-explore">Explore Use Cases</h1>
            <button> Explore our projects &rarr; </button>
        </div>
        <div class="tiles">
            <UseCases {services} {servicesSentences} {servicesImages}/>
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
