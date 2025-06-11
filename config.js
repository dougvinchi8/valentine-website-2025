const CONFIG = {
  valentineName: "Kevin",
  pageTitle: "Feliz dia dos Namorados meu amor",
  floatingEmojis: {
    hearts: ['❤️','💖','💝','💗','💓'],
    bears: ['🧸','🐻']
  },
  questions: {
    first: {
      text: "Você gosta de mim?",
      yesBtn: "Siim",
      noBtn: "Nem pensar!",
      secretAnswer: "Eu não gosto de você, eu te amo! ❤️"
    },
    second: {
      text: "Quanto você me ama?",
      startText: "Assim!",
      nextBtn: "Próximo ❤️"
    },
    third: {
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
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
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
