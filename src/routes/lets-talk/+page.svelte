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
  setContext('onSubmitForm', { onSubmitForm });
  function onSubmitForm() {
    state = State.requesting;
    doRecaptcha();
    console.log("here");
  }

  let token;
  let state = State.idle;
  function doRecaptcha() {
    grecaptcha.ready(function() {
      grecaptcha.execute(key, { action: "submit" }).then(function(t) {
        // Here I must run the server function
        state = State.success;
        token = t;
      });
    });
  }

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
