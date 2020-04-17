import { ajaxGet } from './ajax.js'

function realisations () {
  let cvLink = document.getElementById("realisations")
  
  cvLink.addEventListener("click", (e) => {
    affichagePageRealisations () 
  })
}

function affichagePageRealisations () {
  /* En local finalUrlSite va permettre d'avoir les données JSON à enlever par la suite et mettre la bonne url */
  let urlSite = document.location.href
  let newUrlSite = urlSite.split("1:")
  let finalUrlSite = newUrlSite[1].substr(0,5)

  ajaxGet("http://127.0.0.1:"+ finalUrlSite +"/data.json", (reponse) => {
    let dataInfos = JSON.parse(reponse)

    /* Titre pour la partie mobile */
    let headerTitle = document.getElementById("titreNavigation")
    let titleH1 = document.createElement("h1")
    headerTitle.innerHTML = ""
    titleH1.textContent = "réalisations"
    headerTitle.appendChild(titleH1)

    /* Le contenu de la partie main */
    let main = document.getElementById("main")
    let realisationsInfos = dataInfos.realisations

    main.innerHTML = ""
    main.className = "realisations"

    for (let i = 0; i < realisationsInfos.length ; i++){
      let wrapper = document.createElement("div")
      let imagesBlock = document.createElement("img")
      wrapper.className = "realisationsBlock"
      imagesBlock.className = "imgLink"
      imagesBlock.src = realisationsInfos[i].logo
      imagesBlock.alt = realisationsInfos[i].entreprise
      imagesBlock.dataset.numeroLogo = i

      imagesBlock.addEventListener("click", (e) => {
        e.preventDefault()
        main.innerHTML = ""
        let numeroLogo = e.currentTarget.dataset.numeroLogo
        let date = realisationsInfos[numeroLogo].date
        let entreprise = realisationsInfos[numeroLogo].entreprise
        let fonction = realisationsInfos[numeroLogo].fonction
        let environement = realisationsInfos[numeroLogo].environement
        let description = realisationsInfos[numeroLogo].description
        let logo = realisationsInfos[numeroLogo].logo

        let paragraphePhoto = document.createElement("p")
        paragraphePhoto.innerHTML = '<img class="imgLink" src="'+ logo +'" alt="'+ entreprise + '"><br>'+ date + '<br>Entreprise : ' + entreprise + '<br>Fonction : ' + fonction + '<br>Environement : ' + environement + '<br>Description : ' + description

        main.appendChild(paragraphePhoto)
      })
      wrapper.appendChild(imagesBlock)
      main.appendChild(wrapper)
    }  
  })
}

export { realisations, affichagePageRealisations }
