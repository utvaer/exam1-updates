const postContainer = document.querySelector(".blog-post");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postPageUrl = "https://linnscape.com/wordpress1/wp-json/wp/v2/posts/" + id;

async function getBlogPost(url) {
    const response = await fetch(url);
    const post = await response.json();
    document.title = `Blog | ${post.title.rendered}`;
    postContainer.innerHTML +=
    `<div class="post-page"> 
        <h2>${post.title.rendered}</h2>
        <div class="post-category">${post.categories_names}</div>
        <div class="post-date">${post.date}</div>
        <img class="post-image" src="${post.fimg_url}" alt="${post.title.rendered} featured image">
        <div class="post-content">${post.content.rendered}</div>
        <div class="signature">Tiffany</div>
    </div>`

    const imagesBlogPost = document.querySelectorAll("figure");
    
    for(let i = 0; i < imagesBlogPost.length; i++) {
        imagesBlogPost[i].addEventListener("click", function(event) {
            let clicked = event.target;
            if ((imagesBlogPost[i].classList.contains("modal-image")) && (clicked.tagName !== ("IMG"))) {
                imagesBlogPost[i].classList.remove("modal-image");
            }
            else if (!imagesBlogPost[i].classList.contains("modal-image")) {
                imagesBlogPost[i].classList.add("modal-image");
            }
        })
    }
    
    
}

getBlogPost(postPageUrl);

// ________________ Handle comments __________


/*const commentForm = document.querySelector(".comment-form");

commentForm.addEventListener("submit", submitComment());

function submitComment(event) {
    event.preventDefault();
    console.log("hellawww");
}*/