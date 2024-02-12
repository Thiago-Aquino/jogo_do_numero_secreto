let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){ 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirmensagemInicial(){
    exibirTextoNaTela("h1", "jogo do número secreto"); 
    exibirTextoNaTela("p", "Escolha um número entre 1 e 50");
}

exibirmensagemInicial();

function verificarChute(){ 
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor!");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior!");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){ 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

/* DESAFIOS

function exibe(){
    console.log("Olá, mundo!");
}

exibe();

function exibeNome(nome){
    console.log(`Olá, ${nome}!`);
}

exibeNome("thiago");

function calcularDobro(numero){
    return dobro = numero * 2;
}

let resultadoDobro = calcularDobro(8);
console.log(resultadoDobro);

function calcularMedia(num1, num2, num3){
    return media = (num1 + num2 + num3)/3; 
}

let resultadoMedia = calcularMedia(4, 5, 6);
console.log(resultadoMedia);

function maiorNumero(num1, num2){
    num1 > num2 ? maior = num1: maior = num2;
    return maior;
}

let resultadoMaiorNumero = maiorNumero(10, 20);
console.log(resultadoMaiorNumero);

function calcularMultiplicao(num1) {
    return multiplicao = num1 * num1;
}

let resultadoMultiplicao = calcularMultiplicao(25);
console.log(resultadoMultiplicao);

*/

/*DESAFIO
function calcularImc(altura, peso){
   return imc = peso / (altura * altura);
}

calcularImc(1.74, 60.0 );
alert(imc);
*/

/*DESAFIO
let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let nomes = [ "Maria", "Thiago", "Miguel"];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
*/


