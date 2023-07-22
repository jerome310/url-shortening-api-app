const btn = document.querySelector(".hamburger-button");
const navContainer = document.querySelector(".nav-links-container");
const form = document.querySelector(".input-container");
let input = document.querySelector(".input");
let invalidMessage = document.querySelector(".invalid-message");
let inputButton = document.querySelector(".input-button");
let displayValue = [];

// Toggle Navbar
btn.addEventListener("click", () => {
  navContainer.classList.toggle("dropdown");
});

// Input PreventDefault
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Button Functionality
inputButton.addEventListener("click", () => {
    // 1) Find a regex for url link addresses
    let urlInput = input.value;
    displayValue.push(urlInput);
    console.log(displayValue)
    if(!urlInput.match(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm)){
      input.style.border = "3px solid #EA7F80";
      invalidMessage.style.color = "#EA7F80";
      invalidMessage.textContent = "Please add a link";
    } else {
      console.log("NOPE!");
    }
    input.value = ''
    // 2) Give the input an invalid feature if it's not correct
    // 3) Display the url from the input on the browser
    // 4) Style the Div for the url
    // 5) Find out how to build out a copy feature 
});
