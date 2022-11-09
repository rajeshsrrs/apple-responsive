const searchButton =  document.querySelector("nav .navlistdesktop .link-search")
const closeButton =  document.querySelector(".search-container .link-close")
const desktopNav = document.querySelector(".navlistdesktop")
const searchContainer = document.querySelector(".search-container")
const overlay = document.querySelector(".overlay")

searchButton.addEventListener("click", ()=>  {
    desktopNav.classList.add("hide")
    searchContainer.classList.remove("hide")
    overlay.classList.add("show")


})

closeButton.addEventListener("click", ()=>  {
    desktopNav.classList.remove("hide")
    searchContainer.classList.add("hide")
    overlay.classList.remove("show")


})
overlay.addEventListener("click", ()=>  {
    desktopNav.classList.remove("hide")
    searchContainer.classList.add("hide")
    overlay.classList.remove("show")


})

// // mobile version

const menuIconContainer = document.querySelector("nav .menu-icon-container")
const navContainer = document.querySelector(".nav-container")


menuIconContainer.addEventListener("click",() => {
    navContainer.classList.toggle("active")
    searchBar.classList.remove("active")
    nav.classList.remove("move-up")
    desktopNav.classList.remove("move-down")
})

const searchBar = document.querySelector(".mobile-search-container .search-bar")
const nav = document.querySelector(".nav-container nav")
const searchInput  = document.querySelector(".mobile-search-container input")
const cancelButton = document.querySelector(".mobile-search-container .cancel-btn")

searchInput.addEventListener("click",()=> {
    searchBar.classList.add("active")
    nav.classList.add("move-up")
    desktopNav.classList.add("move-down")
})

cancelButton.addEventListener("click",()=> {
    searchBar.classList.remove("active")
    nav.classList.remove("move-up")
    desktopNav.classList.remove("move-down")
})
