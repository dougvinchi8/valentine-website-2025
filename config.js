// Initialize configuration
const CONFIG = {
  valentineName: "Kevin",
  pageTitle: "Feliz dia dos Namorados meu amor",
  floatingEmojis: {
    hearts: ['❤️','💖','💝','💗','💓'],
    bears: ['🧸','🐻']
  },

  // 🎉 Perguntas engraçadas personalizadas
  questions: {
    first: {
      text: "Se você não me ama, então o que é essa carinha fofa que você faz quando me olha?",
      noBtn: "Ah pronto! Tá se achando muito em Douglas",
      noBtn: "Ops… resposta errada, tente de novo 🗡️",
      secretAnswer: "É CLARO QUE EU TE AMO MEU AMOR"
    },
    second: {
      text: "Você prefere: me dar um abraço apertado ou roubar meu sorvete?",
      noBtn: "Roubo do sorvete 🍦",
      noBtn: "Ops… resposta errada, tente de novo 🗡️",
      secretAnswer: "Cada opção me faz te amar mais!"
    },
    third: {
      text: "Se eu fosse uma comida, você me comeria todo?",
      noBtn: "Comeria todo, meu amor!",
      noBtn: "Chama o delivery 😂",
      secretAnswer: "Mas eu prefiro te devorar com carinho!"
    }
  },

  // 📏 Amorômetro e pergunta final originais
  meter: {
    loveMeter: {
      text: "Quanto você me ama?",
      startText: "Assim!",
      nextBtn: "Próximo ❤️"
    },
    finalQuestion: {
      text: "Quer ser meu companheiro de vida pra sempre? Ultrapassando as dificuldades e barreiras 🌹",
      yesBtn: "Sim!",
      noBtn: "Não"
    }
  },

  loveMessages: {
    extreme: "Uau! Você me ama tanto assim?? 🥰🚀💝",
    high: "Até o infinito e além! 🚀💝",
    normal: "E ainda mais! 🥰"
  },

  celebration: {
    title: "Irrul! Sou a pessoa mais feliz do mundo! 🎉💝💖💝💓",
    message: "Agora venha receber seu presente, um abraço bem quente e um beijo enorme!",
    emojis: "🎁💖🤗💝💋❤️💕"
  },

  colors: {
    backgroundStart: "#336633",
    backgroundEnd: "#ff6699",
    buttonBackground: "#c7af6b",
    buttonHover: "#ff6699",
    textColor: "#f6f4f3"
  },

  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
  },

  music: {
    enabled: true,
    autoplay: true,
    musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
    startText: "🎵 Tocar música",
    stopText: "🔇 Parar música",
    volume: 0.5
  }
};

window.VALENTINE_CONFIG = CONFIG;
