const search = document.querySelector('.search');
const searchinput = document.querySelector('.search .search-input');

search.addEventListener("mouseover",  () => {
    searchinput.style.display = "flex";
});
search.addEventListener("mouseout",  () => {
    searchinput.style.display = "none";
});