const btn = document.querySelector(".hamburger-button");
const navContainer = document.querySelector(".nav-links-container");
const form = document.querySelector(".input-container");
let input = document.querySelector(".input");
let invalidMessage = document.querySelector(".invalid-message");
let inputButton = document.querySelector(".input-button");
let displayValue = '';
// Styling Added Class
let urlText = document.querySelector('.url-text');
let apiLink = document.querySelector(".api-link");
let urlShort = document.querySelector(".url-short");
let copyButton = document.querySelector(".copy-button");

// Toggle Navbar
btn.addEventListener("click", () => {
  navContainer.classList.toggle("dropdown");
});

// Input PreventDefault
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// API Function
let shortenUrl = () => {
  let urlInput = input.value;
  let displayValue = urlInput;
  fetch(`https://api.shrtco.de/v2/shorten?url=${displayValue}`)
    .then((data) => data.json())
    .then((item) => {
      let apiObject = item;
      urlText.textContent = displayValue;
      apiObject = item.result.short_link;
      apiLink.textContent = apiObject
      copyButton.textContent = 'Copy'
      copyButton.addEventListener("click", () => {
        copyButton.textContent = "Copied!";
        let buttonLink = item.result.short_link;
        console.log(buttonLink)
        window.navigator.clipboard.writeText(buttonLink)
      });
    });
  };

// Submit It Button Functionality
inputButton.addEventListener("click", () => {
  let urlInput = input.value;
  console.log(urlInput)
  if (
    urlInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/
    )
  ) {
    input.style.border = "";
    invalidMessage.style.color = "";
    invalidMessage.textContent = "";
    shortenUrl();
    urlShort.classList.add("javascript-container");
    urlText.classList.add("javascript-first-text");
    apiLink.classList.add("javascript-second-text");
    copyButton.classList.add("javascript-copy-button");
    inputButton.style.marginBottom = "5px";
    urlShort.style.display = "block";
  } else {
    urlShort.style.display = "none";
    inputButton.style.marginBottom = "25px";
    input.style.border = "3px solid #EA7F80";
    invalidMessage.style.color = "#EA7F80";
    invalidMessage.textContent = "Please add a link";
    console.log("NOPE!");
    urlText.textContent = "";
  }  
});
