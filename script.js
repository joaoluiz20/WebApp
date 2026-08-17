
function login() {
    var usuario = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    if (usuario != '' && senha != '' ) {
        window.location.href = "home.html";
    }
    else
        alert('Login ou senha incorretos!');
        return;
}

const botao = document.getElementById('botao');
    botao.addEventListener('click', function() {
    login()
}); 
 const digital = document.getElementById('digital');
    digital.addEventListener('click'), function() {

}