const INVALID_SEARCH = "Não foram encontrados resultados para a sua pesquisa";

async function loadNews() {
    const query = document.getElementById("search").value;

    pesquisar(query);
}

async function pesquisar(query) {
    const queryName = document.getElementById("queryName");
    queryName.innerHTML = query;

    exibirNoticias({
        headlines: await getArticles(getHeadlines(query)),
        news: await getArticles(getNews(query)),
    });
}

async function exibirNoticias(result) {
    const headlinesElement = document.getElementById("headlines");
    const newsElement = document.getElementById("news");

    if (!isValidArray(result.headlines) || !isValidArray(result.news)) {
        headlinesElement.innerHTML = INVALID_SEARCH;
        newsElement.innerHTML = "";
        return;
    }

    insertCard(headlinesElement, result.headlines);
    insertCard(newsElement, result.news);
}

function insertCard(element, obj) {
    element.innerHTML = obj.map(
        (item) =>
            `<div class="card col-sm-5">
    <img src="${item.urlToImage}" alt="" />
    <div class="description">
        <h4 class="card-title">${item.title}</h4>
        <p class="card-description">
            ${item.description}
        </p>
    </div>
</div>`
    );
}
