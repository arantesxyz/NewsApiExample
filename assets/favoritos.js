function salvarFavorito() {
    const query = document.getElementById("search").value; // pegar o termo a ser pesquisado quando clicar no botão

    const data = getFavoritos();

    data.push({ query });
    localStorage.setItem("favoritos", JSON.stringify(data));

    exibirFavoritos();
}

function exibirFavoritos() {
    const element = document.getElementById("favoritos");
    const data = getFavoritos();

    element.innerHTML = data.map(
        (favorito) => `
        <button
            type="button"
            class="btn btn-secondary"
            onclick="pesquisar('${favorito.query}')"
            >
                ${favorito.query}
        </button>
    `
    );
}

function getFavoritos() {
    let data = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (!Array.isArray(data)) {
        // Favoritos do localStorage não retornou um array, existe um conflito de código em algum lugar.
        // Tratar erro aqui

        console.log("Conflito de código");
        data = [];
    }

    return data;
}
