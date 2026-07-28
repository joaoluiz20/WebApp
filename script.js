
function login() {
    window.location.href = "home.html";
}

const botao = document.getElementById('botao');
    botao.addEventListener('click', function() {
        if (document.getElementById('nome').value == '123' && document.getElementById('senha').value == '123') {
            alert('Login efetuado com sucesso!');
            login()
        }   else {
                alert('Login ou senha incorretos!');
                return;
            }
}); 
 const digital = document.getElementById('digital');
    digital.addEventListener('click'), function() {

}