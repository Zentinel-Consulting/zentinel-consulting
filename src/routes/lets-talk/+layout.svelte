<div
  class="main-container"
>
  <div
    class="content-container"
  >
    <slot/>
  </div>
</div>

<style>
  .main-container{
      /* full screen height */
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
      color: white;
      font-size: 3rem;
      overflow: hidden;
  }
  .content-container {
        flex: 1;
        position: relative; 
        z-index: 1; 
  }
</style>
