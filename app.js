//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validação: verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista exibida na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista exibida na interface
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array e adiciona os nomes à lista
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Validar se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Mostrar o resultado na tela
    document.getElementById("resultado").innerHTML = `🎉 Amigo secreto: <strong>${amigoSorteado}</strong>!`;
}
