/* Animation entrée du site */
const start = () => {
  let logo = document.querySelector(".transition figure img") /* J'appuie sur le logo */
  let transition = document.querySelector(".transition") /* j'ajoute une classe pour l'animation */
  
  function stopActive () {
    transition.style.display = "none"
  }

  logo.addEventListener("click", (e) => {
    e.preventDefault()
    transition.classList.add("active")
    setTimeout(stopActive, 2000)
    clearTimeout(stopActive)
  })
}



export { start }