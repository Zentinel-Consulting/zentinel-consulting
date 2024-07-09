<script lang="ts">
    import novus from '$lib/assets/novus.png';
    import tec from '$lib/assets/tec.svg';
</script>


<div class="partners-container">
    <div class="title-container">
        <h1 class="title">Our Partners</h1>
    </div>
    <div class="partners">
        <button class="partner" on:click={() => window.open('https://novus.tec.mx/es')}>
            <img src={novus} alt="IBM" />
        </button>
        <button class="partner" on:click={() => window.open('https://tec.mx')}>
            <img src={tec} alt="Microsoft" />
        </button>
    </div>
</div>



<style>
    .partners-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }

    .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
        color: white;
        font-size: 1.3rem;
        margin-top: 2rem;
    }

    .partners {
        display: flex;
        flex-direction: row;
        gap: 5rem;
        margin-top: 8rem;
        margin-bottom: 8rem;
        flex-grow: 1;
    }

    .partner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    .partner img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    @media (max-width: 768px) {
        .partners-container {
            width: 100%;
            margin-top: 0;
        }

        .partners {
            display: flex;
            flex-direction: column;
            gap: 5rem;
            margin-top: 5rem;
        }

        .partner {
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }

        .partner img {
            width: 90%;
            height: 90%;
        }

        .title-container {
            font-size: 1rem;
        }
    }

    
    
</style>