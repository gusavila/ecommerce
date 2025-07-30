const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const searchBar = document.querySelector(".search-bar");
const carouselList = document.querySelector(".carousel-list");
const header = document.querySelector("header");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const container = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const scrollAmount = 220;
let isExpanded = false;

carouselList.innerHTML += carouselList.innerHTML;

if (container && prevBtn && nextBtn) {
   
  prevBtn.addEventListener("click", () => {
    console.log("← clicado");
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
     console.log("clicado ← ");
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

searchBtn.addEventListener("click", () => {
  if (!isExpanded) {
    searchBox.style.width = "160px";
    searchBar.style.width = "100%";
    searchBar.style.opacity = "1";
    searchBar.style.padding = "4px 8px";
    searchBar.focus();
    isExpanded = true;
  } else {
    searchBox.style.width = "30px";
    searchBar.style.width = "30px";
    searchBar.style.opacity = "0";
    searchBar.style.padding = "4px 0";
    isExpanded = false;
  }
});

document.addEventListener("click", (e) => {
  const isClickInside = searchBox.contains(e.target);

  if (!isClickInside && isExpanded) {
    searchBox.style.width = "30px";
    searchBar.style.width = "30px";
    searchBar.style.opacity = "0";
    searchBar.style.padding = "4px 0";
    isExpanded = false;
  }
});
