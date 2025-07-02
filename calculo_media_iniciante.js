function calculaMedia() {
    alert('Calculadora de Media');

    var nome = prompt('Qual seu nome?');
    
    var nota1 = prompt('Digite a primeira nota:');
    var nota2 = prompt('Digite a segunda nota:');
    var nota3 = prompt('Digite a terceira nota:');

    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    if (media >= 7) {
        alert(nome + ', sua media foi ' + media + '. Voce passou!');
    } else {
        alert(nome + ', sua media foi ' + media + '. Voce nao passou.');
    }
}