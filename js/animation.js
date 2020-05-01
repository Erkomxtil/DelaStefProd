/* Animation entrée du site */
const start = () => {
  let logo = document.querySelector(".transition figure img") /* J'appuie sur le logo */
  let transition = document.querySelector(".transition") /* j'ajoute une classe pour l'animation */

  logo.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("ok")
    transition.classList.add("active")
  })
}

export { start }