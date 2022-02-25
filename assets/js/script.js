//1 ADICIONAR IDS NOS BOTÕES **
//1...4 ***
//2 SELECIONAR OS BOTÕES
//3 INTERCEPTAR O EVENTO DE CLIQUE 
//4 RECUPERAR O ID ADIONADO 


//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

listaOpcoes.addEventListener("click", indentificarOpcoes)

function indentificarOpcoes(event){
    
    const elemento  = event.target

    if(elemento.tagName == "LI"){

        const id = elemento.id
        
        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`)

        removeClasseMostrar()
        
        secaoEscolha.classList.add("mostrar")
        secaoEscolha.children.classList.add('mostrar')
    }
}

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")
        
    }
}