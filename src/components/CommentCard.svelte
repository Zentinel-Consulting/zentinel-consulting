<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let list_comments = [
    {"comment": "The way to get started is to quit talking and begin doing.", "entity": "Walt Disney"},
    {"comment": "Ideas are easy. Implementation is hard.", "entity": "Guy Kawasaki"},
    {"comment": "The most difficult thing is the decision to act, the rest is merely tenacity.", "entity": "Amelia Earhart"},
    {"comment": "If you're not embarrassed by the first version of your product, you've launched too late.", "entity": "Reid Hoffman"},
    {"comment": "The best way to predict the future is to create it.", "entity": "Peter Drucker"},
    {"comment": "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", "entity": "Mark Zuckerberg"},
    {"comment": "Innovation distinguishes between a leader and a follower.", "entity": "Steve Jobs"},
    {"comment": "The biggest risk is not taking any risk.", "entity": "Sundar Pichai"},
    {"comment": "Fail fast, fail often, but always fail forward.", "entity": "John C. Maxwell"},
    {"comment": "Done is better than perfect.", "entity": "Sheryl Sandberg"},
    {"comment": "The secret to getting ahead is getting started.", "entity": "Agatha Christie"},
    {"comment": "If you're not stubborn, you'll give up on experiments too soon.", "entity": "Jeff Bezos"},
    {"comment": "The most certain way to succeed is always to try just one more time.", "entity": "Thomas Edison"},
    {"comment": "Courage is not the absence of fear, but the triumph over it. Do it afraid.", "entity": "Arianna Huffington"}
  ];

  let currentIndex = 0;
  let showComment = true;
  let showEntity = false;

  function nextComment() {
    showComment = false;
    showEntity = false;
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % list_comments.length;
      showComment = true;
      
      setTimeout(() => {
        showEntity = true;
      }, 1000); // Delay before showing the entity
    }, 1000); // Delay before showing the next comment
  }

  onMount(() => {
    setInterval(nextComment, 5000); // Change comment every 5 seconds
  });
</script>

<div class="main-container">
  <div class="content-container">
    <div class="comment-container">
      {#if showComment}
        <p transition:fade={{ duration: 1000 }}>{list_comments[currentIndex].comment}</p>
      {/if}
    </div>
    <div class="name-container">
      {#if showEntity}
        <p transition:fade={{ duration: 1000 }}>{list_comments[currentIndex].entity}</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .main-container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

  }
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 90%;
  }
  .comment-container {
    width: 100%;
    height: 60%;
  }
  .comment-container p{
    font-family: "Times New Roman", Times, serif;
    font-size: 2.9rem;
    padding: 0;
    margin: 0;
  }
  .name-container {
    display: flex;
    align-items: start;
    justify-content: end;

    width: 100%;
    height: 30%;
  }
  .name-container p {
    font-family: "Times New Roman", Times, serif;
    font-size: 2.8rem;
    padding: 0;
    margin: 0;
  }
  @media only screen and (max-width: 1550px){
    .comment-container p {
      font-size: 2.7rem;
    }
    .name-container p{
      font-size: 2.5rem;
    }
  }
  @media only screen and (max-width: 1130px){
    .comment-container p {
      font-size: 2.5rem;
    }
    .name-container p{
      font-size: 2.3rem;
    }
  }
</style>
