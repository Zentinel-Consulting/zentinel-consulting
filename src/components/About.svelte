<script lang="ts">
    import buildingsoftwareimg from '../lib/assets/buildingsoftware.jpg';

</script>


<div class="about-container">
    <div class="main-image">
        <img src={buildingsoftwareimg} alt="building software" />
        <div class="overlay">
            Building innovative and scalable software solutions
        </div>
    </div>
</div>


<style>
    .about-container {
        position: relative;
        display: flex;
        flex-direction: column;
        color: white;
        height: 70vh;
        justify-content: top;
        align-items: center;
    }

    .main-image {
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        flex-direction: row;
        height: 100%;
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .overlay {
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        font-weight: 800;
        text-align: left;
        padding: 1rem;
    }

    @media (max-width: 768px) {
        .about-container {
            height: 50vh;
        }

        .overlay {
            font-size: 2rem;
            left: 50%;
            width: 80%;   
            line-height: 1.5;    
            font-weight: 600;     
        }
    }
</style>