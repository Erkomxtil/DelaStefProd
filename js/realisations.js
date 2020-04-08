import { ajaxGet } from './ajax.js'

function realisations () {
  let main = document.getElementById("main")
  let cvLink = document.getElementById("realisations")
  
  cvLink.addEventListener("click", (e) => {
    main.innerHTML = ""
    main.className = "realisations"
    main.innerHTML = "<h1>Mes réalisations</h1>"
  })
}

function affichagePageRealisations () {
  /* En local finalUrlSite va permettre d'avoir les données JSON à enlever par la suite et mettre la bonne url */
  let urlSite = document.location.href
  let newUrlSite = urlSite.split("1:")
  let finalUrlSite = newUrlSite[1].substr(0,5)
  console.log("hello")
  ajaxGet("http://127.0.0.1:"+ finalUrlSite +"/data.json", (reponse) => {
    let dataInfos = JSON.parse(reponse)

    console.log(dataInfos.realisations)
  
  })
}

export { realisations, affichagePageRealisations }
