//Troca o XXXXX
window.addEventListener('load', function() {
    const modo = localStorage.getItem('titulo');
    if (modo) {
        document.getElementById('labelTitulo').innerText = modo;
    }
});

// Upload imagem 1
document.getElementById('inputImagem1').addEventListener('change', function() {
    const arquivo = this.files[0];
    if (!arquivo) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imagem1').src = e.target.result;
    };
    reader.readAsDataURL(arquivo);
});

// Upload imagem 2
document.getElementById('inputImagem2').addEventListener('change', function() {
    const arquivo = this.files[0];
    if (!arquivo) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imagem2').src = e.target.result;
    };
    reader.readAsDataURL(arquivo);
});
//Clique na tela
document.getElementById('cancelar').addEventListener('click',function(){
    window.location.href = 'home.html';
});


//Toque na tela
document.getElementById('cancelar').addEventListener('touchend', function() {
    window.location.href = 'home.html';
});

//salvar / JSON
document.getElementById('salvar').addEventListener('click', function() {
    const dados = {
        chamado: document.getElementById('Nchamado').value,
        tipo: document.getElementById('Tipo').value,
        evento: document.getElementById('Evento').value,
        solicitacao: document.getElementById('Solicitacao').value,
        imagem1: document.getElementById('imagem1').src,
        imagem2: document.getElementById('imagem2').src
    };

    console.log(JSON.stringify(dados, null, 2));

    fetch('https://sua-api.com/chamados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(resultado) {
        alert('Salvo com sucesso!');
        window.location.href = 'inicial.html';
    })
    .catch(function(erro) {
        alert('Erro ao salvar!');
        console.log(erro);
    });
});