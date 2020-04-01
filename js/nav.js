/* Pour la navigation du site le menu haut */
const navigation = () => {
  let openLink = document.querySelector(".liens")
  let closeLink = document.getElementById("close")
  let mobileNav = document.getElementById("modalLink")
  
  openLink.addEventListener("click", () => {
    mobileNav.classList.add('isActive')
  })
  closeLink.addEventListener("click", () => {
    mobileNav.classList.remove("isActive")
  })
}

export { navigation }
