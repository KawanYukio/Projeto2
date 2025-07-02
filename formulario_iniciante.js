function mostraForm() {
    var form = document.getElementById('form-container');
    form.style.display = 'block';
}

function enviaForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    
    alert('Dados enviados! Nome: ' + nome + ', Email: ' + email);
}