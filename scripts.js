var sorteados = [];
var total = 0;
var impares = 0;
var media = 0;
var menorQueMedia = [];

function sortear() {
    for (let i = 0; i < 20; i++) {
        sorteados[i] = Math.round(Math.random()*500);        
    }

    total = sorteados.reduce((total, value) => total + value, 0);
    impares = sorteados.reduce((impares, value) => (value%2 == 1) ? impares + value : impares, 0);
    media = total / sorteados.length;
    
    menorQueMedia = sorteados.filter(c => c < media);

    document.getElementById("resultado").innerHTML = `
        <br/><br/>
        <strong>A somatória dos números ímpares :</strong> <br/> ${impares} <br/><br/>
        <strong>Os números que estão abaixo da média de todos os números sorteados :</strong> <br/> ${menorQueMedia.join(',')}
    `;
}