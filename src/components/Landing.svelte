<script lang="ts">
    //import { PromtBox } from "zentinel-ui";
    let words = ["dreams", "ideas", "visions", "software"];
    let currentWordIndex = 0;
    let displayedWord = "innovations";
    let isDeleting = false;
    let typingSpeed = 70; 
    let deletingSpeed = 50;
    let currentColor = "white";

    function typeWord() {
        const currentWord = words[currentWordIndex];

        if (isDeleting) {
        displayedWord = currentWord.substring(0, displayedWord.length - 1);
        if (displayedWord === "") {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            currentColor = getRandomColor();
        }
        } else {
        displayedWord = currentWord.substring(0, displayedWord.length + 1);
        if (displayedWord === currentWord) {
            isDeleting = true;
            setTimeout(typeWord, 2000); 
            return;
        }
        }

        setTimeout(typeWord, isDeleting ? deletingSpeed : typingSpeed);
    }

    function getRandomColor() {
      const hue = Math.floor(Math.random() * 360);
      const saturation = 80 + Math.floor(Math.random() * 20);
      const lightness = 50 + Math.floor(Math.random() * 10);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    function initializeWord(){
      displayedWord = words[currentWordIndex];
      setTimeout(typeWord, typingSpeed);
    }

    initializeWord();
</script>

<div class="landing">
    <div class="stripe"/>
    <div class="stripe">
      <div class="upper-landing">
        <div class="text-container">
          <div class="text-position">
            <span class="we-build">We build</span>
            <span class="moving-word" style="color: {currentColor};">{displayedWord}.</span>
          </div>
          <p class="idea-text">Empower your business with our innovative solutions and ideas.</p>
      </div>
      </div>
    </div>
    <div class="stripe">
      <!-- <div class="chat-input">
        <input type="text" placeholder="I want a website for..." />
      </div> -->
      <!-- <div class="prompt-container">
            <PromtBox
              theme_color = "white"
              oc_height = "100%"
            >
            </PromtBox>
      </div> -->
    </div>
    <!-- <div class="stripe"/> -->
  </div>
  
  <style>
    .landing {
      position: relative;
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

    .stripe {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid #ffffff; */
      z-index: 2;
    }
  
    .upper-landing {
      display: grid;
      grid-template-columns: 100%;
      align-items: center;
      width: 60%;
      padding: 0 0rem;
    }
  
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    /* .prompt-container{
      width: 60%;
      height:15vh;
    } */

    .text-position {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 0rem;
    }

    .we-build {
      white-space: nowrap;
    }

    .moving-word {
      white-space: nowrap;
      margin-left: 1rem;
    }

    .idea-text {
      line-height: 5rem;
      font-size: 1.5rem;
      margin-top: 1rem;
      font-weight: 300;
    }
  

    .text-position p span {
      white-space: nowrap;
    }
  
    /* .chat-input {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      justify-content: center;
      width: 60%;
      margin: 0 auto;
    }
  
    .chat-input input {
      width: 100%;
      height: 7rem;
      font-size: 1.2rem;;
      background-color: transparent;
      border-color: #ffffff;
      color: white;
      border-width: 1.5px;
    }

    .chat-input input::placeholder {
      color: rgb(200, 194, 194);
      padding-left: 1rem;
    }

    .chat-input input:focus {
      outline: none;
      box-shadow: none;
    } */

  
    @media (max-width: 768px) {
      .landing {
        font-size: 2rem;
        padding-top: 3rem;
      }
  
      .upper-landing {
        grid-template-columns: 1fr;
        padding: 1rem;
        width: 100%;
      }
  
      .text-container {
        margin-bottom: 1rem;
        width: 100%;
      }
  
      .text-position {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
        font-size: 1.8rem;
      }

      .moving-word {
        margin-left: 0;
      }

      .idea-text {
        font-size: 1.3rem;
        line-height: 2rem;
      }

      /* .prompt-container{
        width: 90%;
        height: 20vh;
      } */
      
    
    /* .chat-input {
        grid-template-columns: 1fr auto;
        padding: 1rem;
        width: 100%;
    }

    .chat-input input {
        height: 5rem;
        font-size: 1rem;
        width: 100%;
    } */
}
  </style>
