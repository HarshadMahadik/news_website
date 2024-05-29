//variables
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchbtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

//Array
var newsDataArr = [];

// apis 
const API_KEY = "569f14db33974645b9ca2a01f95b2ed4";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";

const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

document.getElementById("clearInput").addEventListener("click", function () {
    document.getElementById("newsQuery").value = "";
});




// Add an event listener for the "keyup" event on the search input field
newsQuery.addEventListener("keyup", function (event) {
    // Check if the pressed key is the "Enter" key (keyCode 13)
    if (event.keyCode === 13) {
        // Trigger the search action
        newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
        fetchQueryNews();
    }
});

// Add an event listener for the search button click (if still needed)
searchBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
    fetchQueryNews();
});



document.addEventListener('DOMContentLoaded', function () {
    const ticker = document.querySelector('.news-ticker');
  
    async function fetchHeadlinesFromAPI() {
      const API_KEY = '569f14db33974645b9ca2a01f95b2ed4';
      const HEADLINES_API = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + API_KEY;
  
      try {
        const response = await fetch(HEADLINES_API);
        const data = await response.json();
  
        if (data.status === 'ok') {
          const headlines = data.articles.map(article => article.title);
  
          // Function to create and append headline elements
          function createHeadlineElement(headlineText) {
            const headlineElement = document.createElement('span');
            headlineElement.classList.add('news-headline');
            headlineElement.textContent = headlineText;
            ticker.appendChild(headlineElement);
          }
  
          // Add headlines to the ticker
          headlines.forEach((headline) => {
            createHeadlineElement(headline);
          });
        } else {
          console.error('Failed to fetch headlines:', data.message);
        }
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    }
  
    // Fetch headlines from the API and populate the ticker
    fetchHeadlinesFromAPI();
  });
  
  



window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};

function reload(){
    window.location.reload();
}


generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Business</h4>";
    fetchBusinessNews();

});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();

});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entertainment</h4>";
    fetchEntertainmentNews();

});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechnologyNews();

});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();



});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}




const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent")
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.ho
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);



    });

}



