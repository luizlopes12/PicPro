//Add ids nos botoes de 1 a 4
//selecionar os botões
//interceptar evento de click
//recuperar os ids selecionados

const lista = document.querySelector('.secaoDetalhesConta__opcoesTransacoes')
lista.addEventListener('click', identificarOpcoes)

const identificarOpcoes = (event) =>{
    console.log(event.target.id)
}