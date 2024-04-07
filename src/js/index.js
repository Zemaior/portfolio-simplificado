/*
    objetivo 1: Usuario clica no botão "mostrar mais" deve abrir os projetos escondidos
        passo 1: pegar o botão "mostrar mais" no JS para poder verificar quando o user clica
        passo 2: identificar o click
        passo 3: adicionar classe "ativo" nos projetos escondidos

    objetivo 2: esconder o botão "mostrar mais" depois do click
        passo 1: pegar o botão e esconder ele
*/
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMais();
    esconderBotao();
})
function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMais() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

