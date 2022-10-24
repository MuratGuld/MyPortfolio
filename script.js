let navbar = document.querySelector(".navbar");

navbar.addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    document.querySelector(".active").classList.remove("active");
    e.target.parentNode.classList.add("active");
  }
});
