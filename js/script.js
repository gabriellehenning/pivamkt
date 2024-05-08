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


