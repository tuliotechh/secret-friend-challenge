let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomeAmigo);
        console.log(amigos);
        document.querySelector("input").value = "";
    }
}

function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
}

for (let i = 0; i < amigos.length; i++) {
    let itemListaAmigos = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(itemListaAmigos);
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.querySelector("#resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

