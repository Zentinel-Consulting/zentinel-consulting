<script lang="ts">
    let words = ["dreams", "ideas", "visions", "software"];
    let currentWordIndex = 0;
    let displayedWord = "";
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
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setTimeout(typeWord, 3000);
</script>

<div class="landing">
  <div class="background">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
  </div>
    <div class="stripe"/>
    <div class="stripe">
      <div class="upper-landing">
        <div class="text-container">
          <div class="text-position">
            We build
            <p style="color: {currentColor};">
              {displayedWord}.
            </p>
          </div>
          <p>Tell us more about your idea.</p>
        </div>
      </div>
    </div>
    <div class="stripe">
      <div class="chat-input">
        <input type="text" placeholder="I want a website for..." />
      </div>
    </div>
    <div class="stripe"/>
  </div>
  
  <style>
    .landing {
      position: relative;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: black;
      color: white;
      font-size: 3rem;
      overflow: hidden;
    }

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      overflow: hidden;
    }

    .circle {
      position: absolute;
      width: 40vw;
      height: 40vw;
      border-radius: 50%;
      filter: blur(100px);
      animation: moveCircles 10s ease-in-out infinite alternate;
    }

    .circle-1 {
      background-color: #ff00ff65;
      left: -25vw;
      animation-name: moveCircle1;
    }

    .circle-2 {
      background-color: #00ffff6b;
      right: -25vw;
      animation-name: moveCircle2;
    }

    @keyframes moveCircle1 {
      0% {
        transform: translateX(0);
      }
      50%, 100% {
        transform: translateX(calc(50vw - 25%));
      }
    }

    @keyframes moveCircle2 {
      0%, 50% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-50vw + 25%));
      }
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

    .text-position {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
  
    .text-position p {
      margin-left: 1rem;
      white-space: nowrap;
    }
  
    .chat-input {
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
    }

  
    @media (max-width: 768px) {
      .landing {
        font-size: 3rem;
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
        flex-direction: column;
        align-items: flex-start;
    }

    .text-position p {
        margin-left: 0;
        margin-top: 1rem;
    }
  
    .chat-input {
        grid-template-columns: 1fr auto;
        padding: 1rem;
        width: 100%;
    }

    .chat-input input {
        height: 5rem;
        font-size: 1rem;
        width: 100%;
    }
}
  </style>