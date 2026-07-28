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

// Touch (celular/tablet)
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


//Botão Incluir
const incluir = document.getElementById('incluir');
const overlay = document.getElementById('overlay');

incluir.addEventListener('click', function() {
  overlay.classList.add('ativo');
});

document.getElementById('btnConfirmar').addEventListener('click', function() {
  overlay.classList.remove('ativo');
  window.location.href = 'inclusao.html'; // troque pela sua página
});

document.getElementById('btnCancelar').addEventListener('click', function() {
  overlay.classList.remove('ativo');
});