// set newsList variable as html ul element id

let newsList = document.getElementById("news");
let sourceList = document.getElementById("sources");
// set list of articles as articles in the news.js array mapped using literals

let articlesList = news.articles.map(function (article) {
  let articleInList = `<li class="list-group-item borderless">
            <div class="card" style="width: 20rem;">
                <div class="card-header">Published: ${article.publishedAt}</div>
                <img class="card-img-top" src =${article.urlToImage} >
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${article.description}</h6>
                    <p class="card-text">${article.content}</p>
                    <a href="${article.url}" class="btn btn-primary">Read Article</a>
                </div>
                </div>
                </li>`;
  return articleInList;
});

// populated html from articlesList

newsList.innerHTML = articlesList.join(" ");

// set sourcesList variable as html element id

let sourcesList = sources.sources.map(function (source) {
  let sourceInList = `<li class="nav-item">
            <a class="nav-link active" href="#">${source.name}</a>
            </li>`;
  return sourceInList;
});

sourceList.innerHTML = sourcesList.join(" ");
