// selecionar os elementos que serão manipulados
const formulario = document.querySelector("form");

const campoCep = formulario.querySelector("#cep");
const campoTelefone = formulario.querySelector("#telefone")
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

// Ativação da máscara para telefone e cep
$(campoTelefone).mask("(00) 0000-0000")
$(campoCep).mask("00000-000")


// capturando o click no botão buscar

botaoBuscar.addEventListener("click", async function () {

    if (campoCep.value.length !== 9) {
    // informar o usuario do erro
    mensagemStatus.textContent = "Digite um CEP valido";
    mensagemStatus.style.color = "blue";

    // parar completamente a execução do script
    return;
    }

    // guardando o valor do cep digitado
    let cepDigitado = campoCep.value;
  
    /*
    AJAX - asyncronous JavaScript And XML
    Técnica de comunicação (transmissão, recebimento) de dados muito usada entre sistem e tecnologias diferentes
    */
    
    // Preparar a URl contendo o CEP buscado 
    let url = `https://viacep.com.br/ws/${cepDigitado}/json/`;
    console.log(url);
    
    // Acessar API (com a URL) e aguardar o retorno dela
    const resposta = await fetch(url);
    console.log(resposta);
    
    // Extrair os dados do retorno/resposta
    const dados = await resposta.json();
    console.log(dados);
    
    // Lidar com os dados (em caso de erro e sucesso)
    if ("erro" in dados) {
        mensagemStatus.textContent = "CEP inexistente!"
        mensagemStatus.style.color = "red"
    } else {
        mensagemStatus.textContent = "CEP encontrado!"
        mensagemStatus.style.color = "blue"
        
        const campos = formulario.querySelectorAll(".campos-restantes")
        for(const campo of campos){
            campo.classList.remove("campos-restantes")
        }

        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;
    }
    // Atribuir os dados de cada campo
   
    

}); //final do evento do botao
