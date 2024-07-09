<script lang="ts">
  import stepsimg from '$lib/assets/test.webp';
  import checkmark from '$lib/assets/checkmark.svg';

  interface Step {
    title: string;
    description: string;
  }

  const steps: Step[] = [
    {
      title: "DISCOVER",
      description: "We start by understanding your project requirements and goals."
    },
    {
      title: "DESIGN",
      description: "Our team creates a tailored solution that meets your needs."
    },
    {
      title: "DEVELOP",
      description: "We build your project using cutting-edge technologies and best practices."
    },
    {
      title: "DELIVER",
      description: "We ensure a smooth deployment and provide ongoing support."
    }
  ];
</script>

<div class="container">
  <div class="title-container">
    <h1>That's how we approach projects</h1>
    <p>Regardless of any project, we deliver.</p>
  </div>
  <div class="content-container">
    <div class="steps-container">
      <div class="image-container">
        <img src={stepsimg} alt="Project steps" />
      </div>
      <div class="steps">
        <div class="vertical-line"></div>
        {#each steps as step, index}
          <div class="step">
            <div class="step-icon">
              <img src={checkmark} alt="Step completed" />
            </div>
            <div class="step-content">
              <div class="step-title">STEP {index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .title-container {
    position: sticky;
    top: 0;
    background-color: #ffffff;
    z-index: 10;
    border-radius: 2rem 2rem 0 0;
  }

  h1 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 3rem;
    color: black;
  }

  p {
    text-align: center;
    margin-bottom: 3rem;
    color: #6b7280;
    font-size: clamp(0.875rem, 2vw, 1rem);
  }

  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #f3f4f6;
    padding: 3rem 1rem;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }

  .steps-container {
    display: flex;
    max-width: 1200px;
    width: 100%;
    gap: 2rem;
  }

  .image-container {
    flex: 1;
  }

  .image-container img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  .steps {
    flex: 1;
    position: relative;
    padding-left: 20px;
  }

  .vertical-line {
    position: absolute;
    top: 0;
    left: 40px;
    height: 90%;
    bottom: 0;
    width: 2px;
    background-color: #3b82f6;
    z-index: 0;
  }

  .step {
    display: flex;
    align-items: flex-start;
    margin-bottom: 3rem;
    position: relative;
  }

  .step-icon {
    width: 40px;
    height: 40px;
    background-color: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .step-icon img {
    width: 20px;
    height: 20px;
  }

  .step-content {
    flex: 1;
  }

  .step-title {
    font-size: 0.75rem;
    color: #6b7280;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .step-content h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    color: #1f2937;
  }

  .step-content p {
    margin: 0;
    font-size: 1rem;
    color: #4b5563;
    text-align: left;
  }

  .step:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0;
    }

    .title-container {
      padding: 1rem;
      height: auto;
    }

    .content-container {
      padding: 2rem 1rem;
    }

    h1 {
      font-size: 1.5rem;
      margin-top: 2.5rem;
    }

    p {
      margin-bottom: 1rem; 
    }

    .steps-container {
      flex-direction: column;
    }

    .image-container {
      display: none;
    }

    .image-container img{
      visibility: hidden;
    }

    .steps {
      padding-left: 10px;
    }

    .vertical-line {
      left: 30px;
    }
  }
</style>
