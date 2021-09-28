const manuBtn = document.querySelector(".img-manu")
const divNav = document.querySelector(".div-nav")
manuBtn.addEventListener("click", () => {
    manuBtn.classList.toggle("img-manu-add")
    divNav.classList.toggle("div-nav-add")
    console.log("click")
})