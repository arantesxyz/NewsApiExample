const API_KEY = "f077af2c71d14505b7a3f2dc43ec5a21";

async function _request(endpoint) {
    return await fetch(`${endpoint}&apiKey=${API_KEY}`).then((response) =>
        response.json()
    );
}

async function getNews(query) {
    return await _request(
        `https://newsapi.org/v2/everything?q=${query}&language=pt`
    );
}

async function getHeadlines(query) {
    return await _request(
        `https://newsapi.org/v2/top-headlines?q=${query}&country=br`
    );
}

/**
 * Check if it's a valid array and return the amount of articles
 * @param {Array} arr Array to check
 */
function isValidArray(arr) {
    return arr && Array.isArray(arr) && arr.length;
}

async function getArticles(promisse) {
    const response = await promisse;
    return await response.articles;
}
