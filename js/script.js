// MENU MOBILE

// Selecionar o botão do menu hamburguer e o menu navbar
const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('#navbarBasicExample');

// Adicionar evento de clique ao botão do menu hamburguer
navbarBurger.addEventListener('click', () => {
    // Alternar a classe 'is-active' no botão do menu hamburguer
    navbarBurger.classList.toggle('is-active');
    
    // Alternar a visibilidade do menu navbar
    navbarMenu.classList.toggle('is-active');

    // Alterar a cor de fundo do menu
    navbarMenu.classList.toggle('menu-active');
});

// Fechar o menu ao clicar em um link
const navbarLinks = document.querySelectorAll('.navbar-item');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarBurger.classList.remove('is-active');
        navbarMenu.classList.remove('is-active');

        // Restaurar a cor de fundo original do menu
        navbarMenu.classList.remove('menu-active');
    });
});

/* Efeito typewrite */

var i = 0;
var txt = 'Seja bem vindo'; /* O texto que você quer que apareça como se estivesse sendo digitado */
var typingSpeed = 80; /* A velocidade de digitação */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.custom-title').innerHTML = txt.slice(0, i) + '<span class="cursor"></span>';
    i++;
    setTimeout(typeWriter, typingSpeed);
  } else if (i === txt.length) {
    setTimeout(() => {
      document.querySelector('.custom-title').innerHTML = txt; // remove o cursor
      setTimeout(() => {
        document.querySelector('.custom-title').innerHTML = txt + ' <span class="emoji">👍</span>'; // adiciona o emoji de 'joia' com a classe 'emoji'
      }, typingSpeed * 10);
    }, typingSpeed);
  }
}

typeWriter();


// ANIMACAO INICIO
var myVideo = document.getElementById('myVideo');

myVideo.onended = function() {
    // Pausa o vídeo
   this.pause();

// Inicia um temporizador de 2 segundos
setTimeout(function() {
    // Reinicia o vídeo
    myVideo.play();
}, 2000); // 2000 milissegundos = 2 segundos
};

// Efeito OLA

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrasesH2 = ['Olá', 'Hello', 'Hola'];
const phrasesH3 = ['Uma jornada', 'autêntica', 'between knowing the path', 'and walking the path'];

const elH2 = document.querySelector('h2.text');
const elH3 = document.querySelector('h3.text');

const fxH2 = new TextScramble(elH2);
const fxH3 = new TextScramble(elH3);

let counterH2 = 0;
let counterH3 = 0;

const nextH2 = () => {
  fxH2.setText(phrasesH2[counterH2]).then(() => {
    setTimeout(nextH2, 800);
  });
  counterH2 = (counterH2 + 1) % phrasesH2.length;
};

const nextH3 = () => {
  fxH3.setText(phrasesH3[counterH3]).then(() => {
    setTimeout(nextH3, 800);
  });
  counterH3 = (counterH3 + 1) % phrasesH3.length;
};

nextH2();
nextH3();