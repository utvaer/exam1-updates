export {postsContainer, baseUrl, getPosts, createHtml}

const postsContainer = document.querySelector(".blog-posts");
const baseUrl = "https://linnscape.com/wordpress1/wp-json/wp/v2/posts/";
const newUrl = baseUrl + `?per_page=10`;



async function getPosts(url){
    try{
        const response = await fetch(url)
        const posts = await response.json();
        
        postsContainer.innerHTML = "";
        createHtml(posts);

    }
        catch(error) {
            postsContainer.innerHTML = displayError("An error has occured on our side, we'll look into it!");
        }
        
}

getPosts(newUrl);

function createHtml(posts) {
    posts.forEach(function(post) {
            postsContainer.innerHTML +=
            `<a href="post.html?id=${post.id}">
            <div class="post-card">
                <img class="post-card-image" src="${post.fimg_url}" alt="${post.title.rendered} featured image">
                <div class="post-text">
                    <div class="post-date">${post.date}</div>
                    <h2>${post.title.rendered}</h2>
                    <div class="post-category">${post.categories_names}</div>
                    <p>${post.excerpt.rendered}</p>
                    <p> Read more...</p>
                </div>
            </div>
            </a>`
        });
}