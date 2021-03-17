const text = document.querySelector('.new').value; 

const btn = document.getElementById("#load");
btn.addEventListener("click", loadNews);

function loadNews(e){
    
    fetch(`https://newsapi.org/v2/everything?q=${text}&from=2021-03-14&to=2021-03-15&sortBy=popularity&apiKey=db38a6a574384b64accec67cdcaaa36f`)
        .then(function(response) {
            return response.json ();
        })
        .then(function(data){
                // print the content
             let output = '';
            data.articles.forEach(function (articles) {
                output += `

              <div class="container1">
                  <img src=${articles.urlToImage} width= 350px>
                  <ul> 
                        <h3>${articles.title}</h3>
                        <h5>${articles.author}</h5>
                        <p>${articles.description}</p>
                        <a href=${articles.url}>Read more...</a> 
                 </ul>
            </div>
                `;
        })
        document.querySelector('#result').innerHTML = output;

        
        e.preventDefault();
        })
   
}