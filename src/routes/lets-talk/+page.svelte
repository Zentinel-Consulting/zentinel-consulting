<script>
  import StepperLetsTalk from "../../components/StepperLetsTalk.svelte";
  import CommentCard from "../../components/CommentCard.svelte";

  let list_comments = [
    {"comment":"Zentinel Consulting Group is just the best consulting company.", "person": "Google"},
    {"comment":"They are the best in web design.", "person": "Alfonso"},
    {"comment":"The product Zentinel delivered has bringed more clients to my bussines.", "person": "Alfonso"},
  ];
</script>

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
      <StepperLetsTalk/> 
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
</style>
