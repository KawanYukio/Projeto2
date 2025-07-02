function jogoNumeroSecreto() {
    alert('Bem-vindo ao Jogo do Numero Secreto');

    var numeroSecreto = parseInt(Math.random() * 10) + 1;
    var chute;

    while (chute != numeroSecreto) {
        chute = prompt('Adivinhe o numero (de 1 a 10)');

        if (chute == numeroSecreto) {
            alert('Voce acertou!');
        } else {
            if (chute > numeroSecreto) {
                alert('O numero secreto e menor!');
            } else {
                alert('O numero secreto e maior!');
            }
        }
    }
}