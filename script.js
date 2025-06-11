// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Validate configuration
function validateConfig() {
  /* sua lógica existente */
}

// Default color values
function getDefaultColor(key) {
  /* sua lógica existente */
}

// Set page title
document.title = config.pageTitle;

// ⏱️ Contador "Juntos desde"
function startTogetherTimer() {
  const startDate = new Date(2025, 2, 17, 19, 30, 0);
  const el = document.getElementById("timer");
  function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    el.textContent = `Estamos juntos há ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}

// Função seta após 4 cliques em "Não"
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

window.addEventListener("DOMContentLoaded", () => {
  validateConfig();
  startTogetherTimer();

  document.getElementById("valentineTitle").textContent = `${config.valentineName}, meu amor...`;

  // Pergunta 1
  document.getElementById("question1Text").textContent = config.questions.first.text;
  document.getElementById("yesBtn1").textContent = config.questions.first.yesBtn;
  const noBtn1 = document.getElementById("noBtn1");
  noBtn1.textContent = config.questions.first.noBtn;
  noBtn1.onclick = () => {
    handleWrongAnswer();
    moveButton(noBtn1);
  };
  document.getElementById("secretAnswerBtn").textContent = config.questions.first.secretAnswer;

  // Pergunta 2 (Love Meter)
  document.getElementById("question2Text").textContent = config.questions.second.text;
  document.getElementById("startText").textContent = config.questions.second.startText;
  document.getElementById("nextBtn").textContent = config.questions.second.nextBtn;
  const noBtn2 = document.getElementById("noBtn2");
  if (noBtn2) {
    noBtn2.onclick = () => {
      handleWrongAnswer();
      moveButton(noBtn2);
    };
  }

  // Pergunta 3
  document.getElementById("question3Text").textContent = config.questions.third.text;
  document.getElementById("yesBtn3").textContent = config.questions.third.yesBtn;
  const noBtn3 = document.getElementById("noBtn3");
  noBtn3.textContent = config.questions.third.noBtn;
  noBtn3.onclick = () => {
    handleWrongAnswer();
    moveButton(noBtn3);
  };

  createFloatingElements();
  setupMusicPlayer();
});

// Continua com suas funções originais abaixo...

function createFloatingElements() { /* ... */ }
function setRandomPosition(el) { /* ... */ }
function showNextQuestion(num) { /* ... */ }
function moveButton(button) {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = "fixed";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

function celebrate() {
  const arrow = document.getElementById("hintArrow");
  if (arrow) arrow.remove();
  /* sua lógica de celebração */
}

function createHeartExplosion() { /* ... */ }
function setupMusicPlayer() { /* ... */ }


