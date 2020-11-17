let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calc() {
    console.log("calculando");
    
    let qtdAdultos = inputAdultos.value;
    let qtdCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePPessoa(duracao);
    let cerveja = cervejaPPessoa(duracao);
    let bebidas = bebidasPPessoa(duracao);

    let qtdTotalCarne = carne * qtdAdultos + (carne /2 * qtdCriancas);
    let qtdTotalCerveja = cerveja * qtdAdultos;
    let qtdTotalBebidas = bebidas * qtdAdultos + (bebidas /2 * qtdCriancas);

    resultado.innerHTML = `<p>${qtdTotalCarne /1000} kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} garrafas de bebida</p>`
   
}

function carnePPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}


function bebidasPPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}