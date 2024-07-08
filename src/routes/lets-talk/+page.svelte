<script>
  import { onMount, setContext } from "svelte";
  import StepperLetsTalk from "../../components/StepperLetsTalk.svelte";
  import CommentCard from "../../components/CommentCard.svelte";

  const key = "6Ld92wYqAAAAALFO3qeUn-_r3K-mKzhoIVTFVPy8";
  let State = {
    idle: "idle",
    requesting: "requesting",
    success: "success"
  };

  let token;
  let state = State.idle;

  async function doRecaptcha() {
    return new Promise((resolve, reject) => {
      grecaptcha.ready(function() {
        grecaptcha.execute(key, { action: "submit" }).then(function(t) {
          state = State.success;
          token = t;
          resolve(t);
        }).catch((error) => {
          state = State.error;
          reject(error);
        });
      });
    });
  }

  async function onSubmitForm() {
    state = State.requesting;
    try {
      token = await doRecaptcha();
      // Here you can run the server function or any further logic
    } catch (error) {
      // Handle the error case
      state = State.error;
      console.error("Recaptcha failed", error);
    }
    return token;
  }

  setContext('onSubmitForm', { onSubmitForm });

</script>

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js?render={key}" async defer></script>
</svelte:head>

<div
 class="main-content"
>
  <div
    class="placeholder-container"
  >
    <div
      class="service-comments-container"
    >
      <div 
        class="card-container"
      >
      <CommentCard />
      </div>
    </div>
  </div>
  <div
    class="form-container"
  >
    <div
      class="form-holder" 
    >
      <StepperLetsTalk /> 
    </div>
  </div>
</div>

<style>
  .main-content {
    display: flex;
    flex-direction: row;

    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }
  .placeholder-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    height: 100%;
    background-color: black;
  }
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    background-color: white;
  }
  .form-holder {
    height: 80%;
    width: 60%;
  }
  .service-comments-container {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50%;
    width:100%;
  }
  .card-container {
    width: 80%; 
    height: 80%;
  }
  @media only screen and (max-width: 900px){
    .placeholder-container {
      display: none;
    }
    .form-container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px){
    .form-holder {
      width: 80%;
    }
  }
</style>
