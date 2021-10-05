import { createHtml, getPosts, postsContainer, baseUrl } from "./components/getposts.js";

const popularContainer = document.querySelector(".latest-post");

/*
*
* Create popular blog post section
*
* 
*/

async function popularPost(url) {
    try{
        const response = await fetch(url);
        const posts = await response.json();
        for(let i = 0; i < posts.length; i++) {
            console.log(posts[i].tag_names)
            if(posts[i].tag_names.length === 0) {
                continue;
            }
            popularContainer.innerHTML +=
            `<a href="post.html?id=${posts[i].id}">
            <div class="post-card popular">
                <img class="post-card-image" src="${posts[i].fimg_url}">
                <div class="post-text">
                    <div class="post-date">${posts[i].date}</div>
                    <h2>${posts[i].title.rendered}</h2>
                    <div class="post-category">${posts[i].categories_names}</div>
                    <p>${posts[i].excerpt.rendered}</p>
                    <p> Read more...</p>
                </div>
            </div>
            </a>`
        }
    }

    catch(error) {
            popularContainer.innerHTML = displayError("An error has occured on our side, we'll look into it!");
    }
}

popularPost(baseUrl);




/*async function getCarousel(){
    try{
        const response = await fetch(baseUrl);
        const posts = await response.json();
        console.log(posts);
        carousel.innerHTML = "";

        for (let i = 0; i < posts.length; i++) {
            if (i === 4) {
                break;
            }

            carousel.innerHTML +=
            `<figure>
            <div class="carousel-post">
                <div class="post-card">
                    <img class="post-card-image" src="${posts[i].fimg_url}">
                    <div class="post-text">
                        <div class="post-date">${posts[i].date}</div>
                        <h2>${posts[i].title.rendered}</h2>
                        <div class="post-category">${posts[i].categories_names}</div>
                        <p>${posts[i].excerpt.rendered}</p>
                        <a href="post.html?id=${posts[i].id}"> Read more...</a></button>
                    </div>
                </div>
            </div>
            </figure>`;
        
        }
        

    }
        catch(error) {
            carousel.innerHTML = displayError("An error has occured on our side, we'll look into it!");
        }
        
}

getCarousel();*/

