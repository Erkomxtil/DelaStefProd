import { affichagePageAccueil } from './accueil.js'
import { affichagePageRealisations } from './realisations.js'
import { affichagePageContact } from './contact.js'

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

const mobileNavLink = () => {
  /* Gestion des click sur la navigation mobile */
  let liensMobile = document.querySelectorAll("#mobileNav li")
  for (let lien of liensMobile) {
    lien.addEventListener("click", (e) => {
      let classLink = e.target.textContent.toLowerCase()
      let modalClose = document.getElementById("modalLink")
      let main = document.getElementById("main")
      modalClose.classList.remove("isActive")
      main.innerHTML = ""

      /* J'affiche la page qui correspond au click du lien mobile */
      switch ( classLink) {
        case "accueil":
          affichagePageAccueil()
        break;
        case "réalisations":
          affichagePageRealisations()
        break;
        case "contact":
          affichagePageContact()
        break;
        default: 
          console.log("Erreur de click")
      }
    })
  }
}

export { navigation, mobileNavLink }
