let navbar = document.querySelector(".navbar");
let hamburgerLinks = document.getElementById("hamburger-menu");

navbar.addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    document.querySelector(".active").classList.remove("active");
    e.target.parentNode.classList.add("active");
  }
});

navbar.addEventListener("click", (e) => {
  if (e.target.className == "hamburger-link") {
    hamburgerLinks.style.display = "none";
    document.querySelector(".active").classList.remove("active");
  }
});

// hamburger menu
function handleHamburgerMenu() {
  if (hamburgerLinks.style.display === "block") {
    hamburgerLinks.style.display = "none";
  } else {
    hamburgerLinks.style.display = "block";
  }
}
