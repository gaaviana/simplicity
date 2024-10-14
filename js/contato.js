// selecionar os elementos que serão manipulados
const formulario = document.querySelector("form");

const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

// capturando o click no botão buscar

botaoBuscar.addEventListener("click", function () {

    if (campoCep.value.length !== 9) {
    // informar o usuario do erro
    mensagemStatus.textContent = "Digite um CEP valido";
    mensagemStatus.style.color = "red";

    // parar completamente a execução do script
    return;
    }

    // guardando o valor do cep digitado
    let cepDigitado = campoCep.value;
 
    /*
    AJAX - asyncronous JavaScript And XML
    Técnica de comunicação (transmissão, recebimento) de dados muito usada entre sistem e tecnologias diferentes
    */
    

}); //final do evento do botao
