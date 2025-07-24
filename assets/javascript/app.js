const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const searchBar = document.querySelector(".search-bar");
const list = document.querySelector('.testimonial-list');

list.innerHTML += list.innerHTML

let isExpanded = false;

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

