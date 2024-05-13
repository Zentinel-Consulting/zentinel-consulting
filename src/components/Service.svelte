<script lang="ts">
    export let title: string;
    export let points: string[];
    export let image: string;
  </script>
  
  <div class="service-grid">
    <div class="service-container">
      <div class="content">
        <img class="service-image" src={image} alt="Service Image" aria-hidden="true" />
        <div class="service-description">
          <div class="service-title">
            <h1>{title}</h1>
          </div>
          <div class="service-points">
            {#each points as point}
              <span>{point}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      justify-items: center;
      align-items: start;
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 80%;
    }
  
    .service-container {
      background-color: transparent;
      min-height: 300px;
      width: 100%;
    }
  
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
      background-color: transparent;
    }
  
    .service-image {
      width: 100%;
      height: 200px;
      background-color: #f72323;
      background-size: cover;
      background-position: center;
      border-radius: 1rem;
    }
  
    .service-description {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      width: 100%;
      padding-top: 1rem;
    }
  
    .service-title {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: left;
      align-items: top;
    }
  
    .service-title h1 {
      color: black;
      font-size: 1.8rem;
      padding-left: 0.5rem;
      overflow: hidden;
    }
  
    .service-points {
      width: 60%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: top;
      margin-top: 0.5rem;
      gap: 0.5rem;
      margin-right: 0;
      color: black;
    }
  
    .service-points span {
      box-sizing: border-box;
      font-size: 1.2rem;
    }
  
    @media (max-width: 768px) {
      .service-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
  
      .service-container {
        width: 100%;
      }
  
      .content {
        border-radius: 0;
        background-color: white;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: auto;
      }
  
      .service-image {
        display: none;
      }
  
      .service-description {
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      .service-title {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
      }
  
      .service-title h1 {
        font-size: 1.5rem;
        padding-left: 0rem;
        text-align: center;
      }
  
      .service-points {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-right: 0rem;
        margin-top: 1rem;
        padding: 0 1rem;
      }
  
      .service-points span {
        width: 100%;
        padding: 0.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  </style>