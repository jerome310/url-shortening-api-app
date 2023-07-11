const btn = document.querySelector(".hamburger-button");
const navContainer = document.querySelector(".nav-links-container");
console.log(navContainer)


btn.addEventListener('click', () => {
    navContainer.classList.toggle("dropdown");
})