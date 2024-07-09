<script lang="ts">
  import { SquareAsteriskIcon, ArrowRight } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  
  function handleContact() {
    goto('/lets-talk');
  }

</script>

<div class="landing">
    <div class="company">
        <SquareAsteriskIcon size="20" color="white" /> WE ARE ZENTINEL
    </div>
    <div class="main-text">
        <span class="title one">
            Inspiring
        </span>
        <span class="title two">
          creativity,
        </span>
        <span class="title three">
          driving technology
        </span>
    </div>
    <div class="contact-button">
        <button
          on:click={handleContact}
        >
            CONTACT US
            <div class="sliding-element">
              <ArrowRight size="20" color="white" />
            </div>
        </button>
    </div>
</div>
  
  <style>
    .landing {
      position: relative;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
      background-color: transparent;
      color: white;
    }

    .company {
      padding: 0.4rem;
      font-size: 0.8rem;
      font-family: 'Sentient', sans-serif;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-top: 12%;
      margin-bottom: 2rem;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.5rem;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .main-text {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 5%;
    }

    .title {
      font-size: 7rem;
      font-weight: 400;
      line-height: 100%;
      font-style: normal;
      font-family: 'Sentient', sans-serif;
    }

    .one {
      justify-content: center;
      align-self: center;
      display: flex;
      margin-right: 12rem;
    }

    .two {
      justify-content: center;
      align-self: center;
      display: flex;
      margin-left: 12rem;
      color: #00c8ff;
    }

    .three {
      justify-content: center;
      align-self: center;
      display: flex;
    }

    .contact-button {
      margin-top: 2rem;
    }

    button {
      padding: 0.3rem 0.3rem 0.3rem 3rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      background: rgba(255, 255, 255, 0.101);
      border-radius: 0.5rem;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      justify-content: center;
      align-items: center;
      display: flex;
      gap: 3rem;
    }

    button:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .sliding-element {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 0.2rem;
      padding: 0.8rem;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    @media (max-width: 768px) {
      .company {
        margin-top: 25%;
        margin-bottom: 5rem;
      }
      
      .title {
        font-size: 3rem;
      }

      .one {
        margin-right: 6rem;
      }

      .two {
        margin-left: 3rem;
      }

      .three {
        margin-left: 3rem;
      }

      .contact-button {
        margin-top: 5rem;
      }
    }

    @media (max-width: 991px) {
      .company {
        margin-top: 8%;
        margin-bottom: 5rem;
      }
      
      .title {
        font-size: 3rem;
      }

      .one {
        margin-right: 6rem;
      }

      .two {
        margin-left: 3rem;
      }

      .three {
        margin-left: 3rem;
      }

      .contact-button {
        margin-top: 5rem;
      }
    }

    @media (max-width: 1024px) {
      .company {
        margin-top: 8%;
        margin-bottom: 5rem;
      }
      
      .title {
        font-size: 3rem;
      }

      .one {
        margin-right: 6rem;
      }

      .two {
        margin-left: 3rem;
      }

      .three {
        margin-left: 3rem;
      }

      .contact-button {
        margin-top: 5rem;
      }
    }

    @media (max-width: 1200px) {
      .company {
        margin-top: 8%;
        margin-bottom: 5rem;
      }
      
      .title {
        font-size: 3rem;
      }

      .one {
        margin-right: 6rem;
      }

      .two {
        margin-left: 3rem;
      }

      .three {
        margin-left: 3rem;
      }

      .contact-button {
        margin-top: 5rem;
      }
    }

    @media (max-width: 1440px) {
      .company {
        margin-top: 8%;
        margin-bottom: 5rem;
      }
      
      .title {
        font-size: 3rem;
      }

      .one {
        margin-right: 6rem;
      }

      .two {
        margin-left: 3rem;
      }

      .three {
        margin-left: 3rem;
      }

      .contact-button {
        margin-top: 5rem;
      }
    }

    
    /* for a 411 x 731 */
    @media (max-width: 411px) {
      .company {
        margin-top: 25%;
        margin-bottom: 5rem;
      }
      
      .title {
        font-size: 3rem;
      }

      .one {
        margin-right: 6rem;
      }

      .two {
        margin-left: 3rem;
      }

      .three {
        margin-left: 3rem;
      }

      .contact-button {
        margin-top: 5rem;
      }
    }
      

  </style>
