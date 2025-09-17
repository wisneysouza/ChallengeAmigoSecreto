//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//lista de nomes - array para armazenar os nomes adicionados
let nomes = [];


//função para adicionar nomes à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // remove espaços em branco extras
    // Verifica se o nome não está vazio antes de adicionar
    if (nome  !== "") {
    nomes.push(nome);

    const item = document.createElement("li");
    item.innerText = nome;
    document.getElementById("listaDeNomes").appendChild(item); 
    input.value = ""; // limpa o campo após adicionar o nome
    }else{
        document.getElementById("resultadoFinal").innerText = "Digite um nome válido.";}
}

//função para sortear amigo secreto
function sortearAmigo() {
    if (nomes.length < 1) {
        document.getElementById("resultado").innerText = "Adicione mais amigos para sortear!";
        return;
    }
    const sorteados = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes.splice(sorteados, 1)[0]; // Remove o nome sorteado da lista]; 


    document.getElementById("resultado").innerText ='O amigo secreto é : '+ nomeSorteado;
    // Verifica se a lista está vazia após o sorteio
    if (nomes.length === 0) {
        setTimeout(() => {
        document.getElementById("resultadoFinal").innerText += "Todos os amigos já foram sorteados!";
        }, 5000); // espera 5 segundos antes de mostrar a mensagem final
    }
}