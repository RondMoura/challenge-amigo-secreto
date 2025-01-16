//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let amigoSorteio
let mostrarSorteio = document.getElementById('resultado')

// Função para adicionar item à lista de amigos
function adicionarAmigo() {
    // Obter o valor do input
    let item = document.querySelector("input").value;

    // Verificar se o campo não está vazio
    if (item.trim() !== "") {
        // Adicionar o item à lista
        listaAmigos.push(item);

        // Atualizar a visualização da lista na página
        exibirLista();

        // Limpar o input
        document.querySelector("input").value = "";
    } else {
        alert("Por favor, digite um nome de um amigo!");
    }
}

// Função para exibir a lista atualizada na página
function exibirLista() {

    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaElement.appendChild(li);
    }
}

//Função para realizar o sorteio de um nome aleatorio
function sortearAmigo(){

    let indiceListaAmigo = Math.floor(Math.random() * listaAmigos.length);
    console.log(listaAmigos[indiceListaAmigo])
    let li = document.createElement("li");
    li.textContent = `O seu amigo secreto é: ${listaAmigos[indiceListaAmigo]}`;
    mostrarSorteio.innerHTML = "";
    mostrarSorteio.appendChild(li);

}






