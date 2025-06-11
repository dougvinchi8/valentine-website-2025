// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Validate configuration
function validateConfig() {
  const warnings = [];
  const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
  Object.entries(config.colors).forEach(([key, value]) => {
    if (!isValidHex(value)) warnings.push(`${key} inválido!`);
  });
  if (warnings.length) console.warn("⚠️ Config Warnings:", warnings);
}

// Default color fallback
function getDefaultColor(key) {
  const defaults = {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  };
  return defaults[key] || "#fff";
}

// Page title
document.title = config.pageTitle;

// Contador "Juntos desde"
function startTogetherTimer() {
  const startDate = new Date(2025, 2, 17, 19, 30, 0);
  const el = document.getElementById("timer");
  function update() {
    const diff = Date.now() - startDate;
    const days = Math.floor(diff / 86400000);
    const hrs = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    el.textContent = `Estamos juntos há ${days}d ${hrs}h ${mins}m ${secs}s`;
  }
  update();
  setInterval(update, 1000);
}

// Seta após 4 erros
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

// DOM Loaded
window.addEventListener("DOMContentLoaded", () => {
  validateConfig();
  startTogetherTimer();

  document.getElementById("valentineTitle").textContent = `${config.valentineName}, meu amor...`;

  // Pergunta 1
  document.getElementById("question1Text").textContent = config.questions.first.text;
  document.getElementById("yesBtn1").textContent = config.questions.first.yesBtn;
  const noBtn1 = document.getElementById("noBtn1");
  noBtn1.textContent = config.questions.first.noBtn;
  noBtn1.onclick = () => { handleWrongAnswer(); moveButton(noBtn1); };
  document.getElementById("secretAnswerBtn").textContent = config.questions.first.secretAnswer;

  // Pergunta 2 (Love Meter)
  document.getElementById("question2Text").textContent = config.questions.second.text;
  document.getElementById("startText").textContent = config.questions.second.startText;
  document.getElementById("nextBtn").textContent = config.questions.second.nextBtn;
  const noBtn2 = document.getElementById("noBtn2");
  if (noBtn2) noBtn2.onclick = () => { handleWrongAnswer(); moveButton(noBtn2); };

  // Pergunta 3
  document.getElementById("question3Text").textContent = config.questions.third.text;
  document.getElementById("yesBtn3").textContent = config.questions.third.yesBtn;
  const noBtn3 = document.getElementById("noBtn3");
  noBtn3.textContent = config.questions.third.noBtn;
  noBtn3.onclick = () => { handleWrongAnswer(); moveButton(noBtn3); };

  createFloatingElements();
  setupMusicPlayer();
});

// Floating elements
function createFloatingElements() {
  const container = document.querySelector(".floating-elements");
  config.floatingEmojis.hearts.forEach(emoji => {
    const d = document.createElement("div");
    d.className = "heart";
    d.innerHTML = emoji;
    setRandomPosition(d);
    container.appendChild(d);
  });
  config.floatingEmojis.bears.forEach(emoji => {
    const d = document.createElement("div");
    d.className = "bear";
    d.innerHTML = emoji;
    setRandomPosition(d);
    container.appendChild(d);
  });
}

function setRandomPosition(el) {
  el.style.left = `${Math.random() * 100}vw`;
  el.style.animationDelay = `${Math.random() * 5}s`;
  el.style.animationDuration = `${10 + Math.random() * 20}s`;
}

function showNextQuestion(num) {
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  document.getElementById(`question${num}`).classList.remove("hidden");
}

function moveButton(button) {
  button.style.position = "fixed";
  button.style.left = `${Math.random() * (window.innerWidth - button.offsetWidth)}px`;
  button.style.top = `${Math.random() * (window.innerHeight - button.offsetHeight)}px`;
}

function celebrate() {
  const arrow = document.getElementById("hintArrow");
  if (arrow) arrow.remove();
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  const celebration = document.getElementById("celebration");
  celebration.classList.remove("hidden");
  document.getElementById("celebrationTitle").textContent = config.celebration.title;
  document.getElementById("celebrationMessage").textContent = config.celebration.message;
  document.getElementById("celebrationEmojis").textContent = config.celebration.emojis;
  createHeartExplosion();
}

function createHeartExplosion() {
  const container = document.querySelector(".floating-elements");
  for (let i = 0; i < 50; i++) {
    const d = document.createElement("div");
    d.className = "heart";
    d.innerHTML = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
    setRandomPosition(d);
    container.appendChild(d);
  }
}

function setupMusicPlayer() {
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  const musicSource = document.getElementById("musicSource");
  if (!config.music.enabled) return;
  musicSource.src = config.music.musicUrl;
  bgMusic.volume = config.music.volume;
  bgMusic.load();
  if (config.music.autoplay) {
    const p = bgMusic.play().catch(() => musicToggle.textContent = config.music.startText);
  }
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = config.music.stopText;
    } else {
      bgMusic.pause();
      musicToggle.textContent = config.music.startText;
    }
  });
}
