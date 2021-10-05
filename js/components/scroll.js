const mainNav = document.querySelector(".nav-header");

function scrollMenu() {
    const scrolledY = window.scrollY;

    if (scrolledY > 60) {
        mainNav.classList.add("scrolled");
    } else {
        mainNav.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", scrollMenu);