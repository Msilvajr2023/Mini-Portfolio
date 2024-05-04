/*
    OBJETIVO - quando clicarmos na aba temos que mostrar
    o conteudo da aba que foi clicado pelo usuário e 
    esconder o conteúdo da aba anterior.

   

    - passo 2 - dar um jeito de identificar o clique no elemento da aba.
    

    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    

    - passo 4 - marcar a aba clicada como selecionada.

    - passo 5 - esconder o conteudo anterior.

    - passo 6 - mostrar o conteudo da aba selecionada.
*/


// - passo 1 - dar um jeito de pegar os elementos que 
//representam as abas no HTML.
const abas = document.querySelectorAll(".aba");

abas.forEach(aba =>{

     //- passo 2 - dar um jeito de identificar o clique no elemento da aba.
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba);
        
        mostrarInformacoesDaAba(aba);

    });
});

// as funções foram feitas para refaturar o código, deixando ele mais bonito e mais organizado.

function selecionarAba(aba){
    //- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    // - passo 4 - marcar a aba clicada como selecionada.
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    //- passo 5 - esconder o conteudo anterior.
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //- passo 6 - mostrar o conteudo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}