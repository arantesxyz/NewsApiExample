async function load() {
    const searchTerm = document.getElementById("search").value || "teste";

    populateElement(
        "headlines-content",
        await getArticles(getHeadlines(searchTerm))
    );

    populateElement("news-content", await getArticles(getNews(searchTerm)));
}

async function populateElement(elementId, arr) {
    const element = document.getElementById(elementId);

    console.log("DEBUG: ", arr);
    console.log("DEBUG: ", isValidArray(arr));

    if (!isValidArray(arr)) {
        element.innerHTML =
            "Não foram encontrados resultados para a sua pesquisa.";

        return;
    }

    element.innerHTML = arr.map(
        (article) =>
            `<div class="card">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <img src="${article.urlToImage}">
    </div>`
    );
}
