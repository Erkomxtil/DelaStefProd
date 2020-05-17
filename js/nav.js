import { affichagePageAccueil } from './accueil.js'
import { affichagePageRealisations } from './realisations.js'
import { affichagePageContact } from './contact.js'

/* Pour la navigation du site le menu haut */
const navigation = () => {
  let openLink = document.querySelector(".liens")
  let closeLink = document.getElementById("close")
  let mobileNav = document.getElementById("modalLink")
  let logoHome = document.querySelector(".logo")
  let main = document.getElementById("main")
  
  openLink.addEventListener("click", () => {
    mobileNav.classList.add('isActive')
  })
  closeLink.addEventListener("click", () => {
    mobileNav.classList.remove("isActive")
  })

  logoHome.addEventListener("click", (e) => {
    main.innerHTML = ""
    affichagePageAccueil()
  })
}

/* Gestion des click sur la navigation mobile */
const mobileNavLink = () => {
  let liensMobile = document.querySelectorAll("#mobileNav li")

  for (let lien of liensMobile) {
    lien.addEventListener("click", (e) => {
      let classLink = e.target.textContent.toLowerCase()
      let modalClose = document.getElementById("modalLink")
      let main = document.getElementById("main")

      modalClose.classList.remove("isActive")
      main.innerHTML = ""

      /* J'affiche la page qui correspond au click du lien mobile */
      switch ( classLink ) {
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
          modalClose.classList.remove("isActive")          
      }

    })
  }
}

/* Liens en surbrillance pour indiquer la page actuelle */
const currentLink = () => {
  let selectedLink = document.querySelectorAll(".liens li a")
  let accueilBtn = document.getElementById("accueil")
  let realisationsBtn = document.getElementById("realisations")
  let contactBtn = document.getElementById("contact")

  /* Affichage pour la page d'accueil avec le bouton selectionner */
  accueilBtn.className = "active"

  for (let link of selectedLink) {     
    link.addEventListener("click", (e) => {
      accueilBtn.className = ""
      realisationsBtn.className = ""
      contactBtn.className = ""
      let selectedBtn = e.currentTarget.id

      switch (selectedBtn) {
        case "accueil":
          accueilBtn.className = "active"
        break
        case "realisations":
          realisationsBtn.className = "active"
        break
        case "contact":
          contactBtn.className = "active"
        break
        default:
          accueilBtn.className = ""          
      }
    }) 
  }
}

export { navigation, mobileNavLink, currentLink }
