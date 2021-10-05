import {postsContainer, baseUrl, getPosts, createHtml} from "./components/getposts.js";

const carouselContainer = document.querySelector(".carousel");


async function getCarousel(url){
    try{
        const response = await fetch(url);
        const posts = await response.json();

        carouselContainer.innerHTML = "";

        for (let i = 0; i < posts.length; i++) {
            if (i === 4) {
                break;
            }
            carouselContainer.innerHTML +=
            `<div class="slide">
                <a href="post.html?id=${posts[i].id}">
                <div class="post-card">
                    <img class="post-card-image" src="${posts[i].fimg_url}">
                    <div class="post-text">
                        <div class="post-date">${posts[i].date}</div>
                        <h2>${posts[i].title.rendered}</h2>
                        <div class="post-category">${posts[i].categories_names}</div>
                        <p>${posts[i].excerpt.rendered}</p>
                    </div>
                </div>
                </a>
            </div>`;
        
            const carouselItem = document.querySelector(".slide");

            if (i === 0) {
                carouselItem.classList.add("active");
            }
        }
/*
*
*
Carousel code by Karl Hawden https://www.youtube.com/watch?v=gor5BvT2z88 , https://github.com/karlhadwen/carousel
*
*
*/

    let slidePosition = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    const nextBtn = document.querySelector("#carousel-button--next");
    nextBtn.addEventListener("click", function() {
        moveToNextSlide();
    });

    const prevBtn = document.querySelector("#carousel-button--prev");
    prevBtn.addEventListener("click", function() {
        moveToPrevSlide();
    });

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove("active");
            slide.classList.add("hidden");
        }

        slides[slidePosition].classList.add("active");
    }
    
    function moveToNextSlide() {
        if(slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    }
    
    function moveToPrevSlide() {
        if(slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    }

    }
        catch(error) {
            carouselContainer.innerHTML = displayError("An error has occured on our side, we'll look into it!");
        }
        
}

getCarousel(baseUrl);
