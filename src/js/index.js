const botao = document.querySelector(".btn-plataformas");

const conteudo = document.querySelector(".btn-plataformas .plataformas");

botao.addEventListener("click", () => {
    conteudo.classList.toggle("ativo");
});