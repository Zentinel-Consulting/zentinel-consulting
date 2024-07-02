<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let list_comments = [
    {"comment": "Zentinel is just the best development group. They deliver.", "entity": "BlackRock"},
    {"comment": "They always deliver efficient products.", "entity": "JP Morgan"},
    {"comment": "Innovative solutions that transformed our workflow.", "entity": "Goldman Sachs"},
    {"comment": "Exceptional attention to detail and robust security measures.", "entity": "Citigroup"},
    {"comment": "Their AI-driven analytics gave us a competitive edge.", "entity": "Morgan Stanley"},
    {"comment": "Zentinel's cloud solutions scaled seamlessly with our growth.", "entity": "Bank of America"},
    {"comment": "Responsive support team and proactive problem-solving.", "entity": "Wells Fargo"},
    {"comment": "Customized solutions that perfectly fit our unique needs.", "entity": "HSBC"},
    {"comment": "Impressive ROI on all projects we've collaborated on.", "entity": "UBS"},
    {"comment": "Their blockchain implementation revolutionized our transactions.", "entity": "Deutsche Bank"},
    {"comment": "Zentinel's cybersecurity measures are second to none.", "entity": "Barclays"},
    {"comment": "They consistently exceed our expectations.", "entity": "Credit Suisse"},
    {"comment": "Cutting-edge tech with a user-friendly interface.", "entity": "BNP Paribas"},
    {"comment": "Seamless integration with our existing systems.", "entity": "Mizuho Financial Group"}
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
</style>
