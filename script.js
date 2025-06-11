// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Validate configuration
function validateConfig() {
    // ... [mantém tudo igual] ...
}

// Default color values
function getDefaultColor(key) {
    // ... [mantém tudo igual] ...
}

// Set page title
document.title = config.pageTitle;

// Função para exibir seta após 4 respostas erradas
let wrongCount = 0;
function handleWrongAnswer() {
  wrongCount++;
  if (wrongCount === 4) {
    const arrow = document.createElement("div");
    arrow.id = "hintArrow";
    arrow.textContent = "⬇️";
    document.body.appendChild(arrow);
  }
}

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;
    
    // Question 1
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    const noBtn1 = document.getElementById('noBtn1');
    noBtn1.textContent = config.questions.first.noBtn;
    noBtn1.onclick = () => {
        handleWrongAnswer();
        moveButton(noBtn1); // mantém comportamento original
    };
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Question 2
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    const noBtn2 = document.getElementById('noBtn2');
    if (noBtn2) {
      noBtn2.onclick = () => {
        handleWrongAnswer();
        moveButton(noBtn2);
      };
    }

    // Question 3
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    const noBtn3 = document.getElementById('noBtn3');
    noBtn3.textContent = config.questions.third.noBtn;
    noBtn3.onclick = () => {
        handleWrongAnswer();
        moveButton(noBtn3);
    };

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();
});

// Create floating hearts and bears
function createFloatingElements() {
    // ... [mantém tudo igual] ...
}

// Set random position for floating elements
function setRandomPosition(element) {
    // ... [mantém tudo igual] ...
}

// Function to show next question
function showNextQuestion(questionNumber) {
    // ... [mantém tudo igual] ...
}

// Function to move the "No" button when clicked
function moveButton(button) {
    handleWrongAnswer(); // também contabiliza aqui, caso bolo
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Love meter functionality
// ... [mantém tudo igual] ...

// Initialize love meter
// ... [mantém tudo igual] ...

// Celebration function
function celebrate() {
    // ... [mantém tudo igual] ...
}

// Create heart explosion animation
function createHeartExplosion() {
    // ... [mantém tudo igual] ...
}

// Music Player Setup
function setupMusicPlayer() {
    // ... [mantém tudo igual] ...
}
