import { ajaxGet } from './ajax.js'

function accueil () {
  /* Gestion des boutons navigation desktop */
  let accueilBtn = document.getElementById("accueil")
  let main = document.getElementById("main")
  
  accueilBtn.addEventListener("click", (e) => { 
    affichagePageAccueil()
  })
}

/* Affichage de la page d'accueil */
function affichagePageAccueil () {
  /* Background de la page */
  document.body.style.backgroundColor = "#5FB7C2"

  const url = new URL(document.location.href)
  const ajaxUrl = url.origin + "DelaStefProd/data.json"
  
  ajaxGet(ajaxUrl, (reponse) => {
    let dataInfos = JSON.parse(reponse)
    
    /* Titre pour la partie mobile */
    let headerTitle = document.getElementById("titreNavigation")
    let titleH1 = document.createElement("h1")
    headerTitle.innerHTML = ""
    titleH1.textContent = "accueil"
    headerTitle.appendChild(titleH1)

    /* Le contenu de la partie main */
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
