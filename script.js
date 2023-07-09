const btn = document.querySelector(".hamburger-button");
const navContainer = document.querySelector(".nav-links-container");
console.log(navContainer)


btn.addEventListener('click', () => {
    navContainer.classList.toggle("dropdown");
})

// const navDisappear = () => {
//     let hide = document.querySelector(".nav-links-container").hidden;
//     console.log(hide, 'hidden')
// }

// navDisappear()