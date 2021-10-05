import { postsContainer, baseUrl, getPosts } from "./components/getposts.js";

const loadMoreButton = document.querySelector(".load-btn");




/*____________ LOAD MORE BTN ___________*/

loadMoreButton.addEventListener ("click", loadMore);

function loadMore() {;
    const newUrl = "https://linnscape.com/wordpress1/wp-json/wp/v2/posts?per_page=100";
        getPosts(newUrl);
        loadMoreButton.style.display = "none";
}




/*____________ FILTER RESULTS____*/ 


const categories = document.querySelectorAll(".category");
const searchButton = document.querySelector(".search-button");

categories.forEach(function(category){
    category.onclick = function(event) {
        const categoryChosen = event.target.value;
        const newUrl = baseUrl + `?categories=${categoryChosen}`;

        postsContainer.innerHTML = "";
        getPosts(newUrl);
    }
    
})

searchButton.onclick = function() {
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = baseUrl + `?search=${searchInput}`;

    postsContainer.innerHTML = "";
    getPosts(newUrl);    
}