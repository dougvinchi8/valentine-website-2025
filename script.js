const config = window.VALENTINE_CONFIG;

// Validate config colors
function validateConfig() {
  const warnings = [];
  const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
  Object.entries(config.colors).forEach(([key, value]) => {
    if (!isValidHex(value)) warnings.push(`${key} inválido!`);
  });
  if (warnings.length) console.warn("⚠️ Config Warnings:", warnings);
}

// Timer "Juntos desde"
function startTogetherTimer() {
  const startDate = new Date(2022, 2, 17, 19, 30, 0);
  const el = document.getElementById("timer");
  if (!el) return;
  function update() {
    const diff = Date.now() - startDate;
    const days = Math.floor(diff / 86400000);
    const hrs = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    el.textContent = `Estamos juntos há ${days}dias ${hrs}horas ${mins}minutos ${secs}segundos`;
  }
  update();
  setInterval(update, 1000);
}

// Show next question and hide others
function showNextQuestion(num) {
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  const section = document.getElementById(`question${num}`);
  if (section) section.classList.remove("hidden");
}

// Move button function (quando clica em "Não")
function moveButton(button) {
  button.style.position = "fixed";
  button.style.left = `${Math.random() * (window.innerWidth - button.offsetWidth)}px`;
  button.style.top = `${Math.random() * (window.innerHeight - button.offsetHeight)}px`;
}

// Contador de erros para mostrar a seta
let wrongCount = 0;
function handleWrongAnswer() {
  wrongCount++;
  if (wrongCount === 4 && !document.getElementById("hintArrow")) {
    const arrow = document.createElement("div");
    arrow.id = "hintArrow";
    arrow.textContent = "⬇️";
    document.body.appendChild(arrow);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  validateConfig();
  startTogetherTimer();

  const title = document.getElementById("valentineTitle");
  if (title) title.textContent = `${config.valentineName}, meu amor...`;

  // Pergunta 1
  const q1 = document.getElementById("question1Text");
  const y1 = document.getElementById("yesBtn1");
  const n1 = document.getElementById("noBtn1");
  const s1 = document.getElementById("secretAnswerBtn");
  if (q1 && y1 && n1 && s1) {
    q1.textContent = config.questions.first.text;
    y1.textContent = config.questions.first.yesBtn;
    y1.onclick = () => showNextQuestion(2);
    n1.textContent = config.questions.first.noBtn;
    n1.onclick = () => { handleWrongAnswer(); moveButton(n1); };
    s1.textContent = config.questions.first.secretAnswer;
  }

  // Pergunta 2
  const q2 = document.getElementById("question2Text");
  const y2 = document.getElementById("yesBtn2");
  const n2 = document.getElementById("noBtn2");
  if (q2 && y2 && n2) {
    q2.textContent = config.questions.second.text;
    y2.textContent = config.questions.second.yesBtn;
    y2.onclick = () => showNextQuestion(3);
    n2.textContent = config.questions.second.noBtn;
    n2.onclick = () => { handleWrongAnswer(); moveButton(n2); };
  }

  // Pergunta 3 (Amorômetro)
  const q3 = document.getElementById("question3Text");
  const loveMeter = document.getElementById("loveMeter");
  const startText = document.getElementById("startText");
  const loveValue = document.getElementById("loveValue");
  const nextBtn = document.getElementById("nextBtn");
  if (q3 && loveMeter && startText && loveValue && nextBtn) {
    q3.textContent = config.questions.third.text;
    startText.textContent = config.questions.third.startText;
    loveValue.textContent = loveMeter.value;
    loveMeter.addEventListener("input", () => {
      loveValue.textContent = loveMeter.value;
    });
    nextBtn.textContent = config.questions.third.nextBtn;
    nextBtn.onclick = () => showNextQuestion(4);
  }

  // Pergunta 4 (final)
  const q4 = document.getElementById("question4Text");
  const y4 = document.getElementById("yesBtn4");
  const n4 = document.getElementById("noBtn4");
  if (q4 && y4 && n4) {
    q4.textContent = config.questions.fourth.text;
    y4.textContent = config.questions.fourth.yesBtn;
    y4.onclick = () => {
      celebrate();
    };
    n4.textContent = config.questions.fourth.noBtn;
    n4.onclick = () => { handleWrongAnswer(); moveButton(n4); };
  }

  createFloatingElements();
  setupMusicPlayer();
});

function createFloatingElements() {
  const container = document.querySelector(".floating-elements");
  if (!container) return;
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

function celebrate() {
  const arrow = document.getElementById("hintArrow");
  if (arrow) arrow.remove();
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  const celebration = document.getElementById("celebration");
  if (!celebration) return;
  celebration.classList.remove("hidden");
  const t = document.getElementById("celebrationTitle");
  const m = document.getElementById("celebrationMessage");
  const e = document.getElementById("celebrationEmojis");
  if (t) t.textContent = config.celebration.title;
  if (m) m.textContent = config.celebration.message;
  if (e) e.textContent = config.celebration.emojis;
  createHeartExplosion();
}

function createHeartExplosion() {
  const container = document.querySelector(".floating-elements");
  if (!container) return;
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
  if (!config.music.enabled || !musicToggle || !bgMusic || !musicSource) return;
  musicSource.src = config.music.musicUrl;
  bgMusic.volume = config.music.volume;
  bgMusic.load();
  if (config.music.autoplay) {
    bgMusic.play().catch(() => musicToggle.textContent = config.music.startText);
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
