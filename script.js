const btn = document.querySelector(".hamburger-button");
const nav = document.querySelector('.nav');
console.log(nav)


btn.addEventListener('click', () => {
    nav.classList.toggle('dropdown')
})