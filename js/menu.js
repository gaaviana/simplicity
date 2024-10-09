// selecionando 
const botaoMenu = document.querySelector(".titulo-menu a");
const listaLinks = document.querySelector(".links-menu");

botaoMenu.addEventListener("click", function( event ){
    //Anulando o comportamento padrão de recarregar a pagina através de links
    event.preventDefault();
    

    listaLinks.classList.toggle("aberto")

    if (listaLinks.classList.contains("aberto")) {
        botaoMenu.innerHTML = "Fechar &times;";
    } else {
        botaoMenu.innerHTML = "Menu &equiv;";
    }
});