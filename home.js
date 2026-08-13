const tabela = document.querySelector('article');

// Mouse (desktop)
let isDown = false;
let startX, scrollLeft;

tabela.addEventListener('mousedown', (e) => {
    isDown = true;
    tabela.style.cursor = 'grabbing';
    startX = e.pageX - tabela.offsetLeft;
    scrollLeft = tabela.scrollLeft;
});
tabela.addEventListener('mouseleave', () => { isDown = false; tabela.style.cursor = 'grab'; });
tabela.addEventListener('mouseup', () => { isDown = false; tabela.style.cursor = 'grab'; });
tabela.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabela.offsetLeft;
    tabela.scrollLeft = scrollLeft - (x - startX) * 1.5;
});

// Touch (celular/tablet) - tabela
let startTouchX, scrollLeftTouch;

tabela.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].pageX - tabela.offsetLeft;
    scrollLeftTouch = tabela.scrollLeft;
});
tabela.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - tabela.offsetLeft;
    tabela.scrollLeft = scrollLeftTouch - (x - startTouchX) * 1;
}, { passive: false });

// Overlay
const overlay = document.getElementById('overlay');
const overlayA = document.getElementById('overlayA');

//Botão Incluir
const incluir = document.getElementById(incluir)
    incluir.addEventListener('click', function() {  
        
    });

// Função auxiliar com Hammer (tap = click + touch)
function addTouchClick(id, fn) {
    const el = document.getElementById(id);
    const hammer = new Hammer(el);
    hammer.on('tap', fn);
}

// Botão Incluir
addTouchClick('incluir', function() {
    localStorage.setItem('titulo', 'Inclusão de Chamado');
    overlay.classList.add('ativo');
});

// Botão Alterar
addTouchClick('alterar', function() {
  localStorage.setItem('titulo', 'Alteração de Chamado');
  overlayA.classList.add('ativo');
});

// Botão Excluir
addTouchClick('excluir', function() {
   overlay.classList.add('ativo'); 
});

// Botões do Modal
addTouchClick('btnConfirmar', function() {
    overlay.classList.remove('ativo');
    window.location.href = 'inclusao.html';
});

addTouchClick('btnCancelar', function() {
    overlay.classList.remove('ativo');
});
>>>>>>> Teste-botoes
