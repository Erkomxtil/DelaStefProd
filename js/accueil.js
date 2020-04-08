import { ajaxGet } from './ajax.js'

function accueil () {
  /* Gestion des boutons navigation desktop */
  let accueilBtn = document.getElementById("accueil")
  let main = document.getElementById("main")
  
  accueilBtn.addEventListener("click", (e) => { 
    affichagePageAccueil()
  })

  /* Gestion des click sur la navigation mobile */
  let liensMobile = document.querySelectorAll("#mobileNav li")
  for (let lien of liensMobile) {
    lien.addEventListener("click", (e) => {
      let classLink = e.target.textContent.toLowerCase()
      let accueilMobile = document.querySelector("#mobileNav ." + classLink)
      console.log(accueilMobile)

      let modalClose = document.getElementById("modalLink")
      modalClose.classList.remove("isActive")
      /* J'affiche la page d'acceuil */
      affichagePageAccueil()
    })
  }
}

/* Affichage de la page d'accueil */
function affichagePageAccueil () {
  /* En local finalUrlSite va permettre d'avoir les données JSON à enlever par la suite et mettre la bonne url */
  let urlSite = document.location.href
  let newUrlSite = urlSite.split("1:")
  let finalUrlSite = newUrlSite[1].substr(0,5)
  
  ajaxGet("http://127.0.0.1:"+ finalUrlSite +"/data.json", (reponse) => {
    let dataInfos = JSON.parse(reponse)
    
    let title = document.createElement("h1")
    let infosTitle = dataInfos.accueil.title
    let fonction = document.createElement("p")
    let linkedIn = document.createElement("p")
    let textes = dataInfos.accueil.textes

    main.innerHTML = ""
    main.className = "accueil"
    title.textContent = infosTitle.prenom + " " + infosTitle.nom
    fonction.className = "fonction"
    fonction.textContent = infosTitle.fonction
    linkedIn.className = "linkedin"
    linkedIn.innerHTML = "<a href="+ infosTitle.linkedInUrl.lien +">" + infosTitle.linkedInUrl.texte + "</a>"     
    
    main.appendChild(title)
    main.appendChild(fonction)
    main.appendChild(linkedIn)
    for (let texte of textes) {
      let paragraphe = document.createElement("p")
      paragraphe.className = "texteAccueil"
      paragraphe.textContent = texte.paragraphe
      main.appendChild(paragraphe)
    }
  })
}

export {accueil, affichagePageAccueil}
