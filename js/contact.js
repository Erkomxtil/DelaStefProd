function contact () {
  let contactLink = document.getElementById("contact")
  
  contactLink.addEventListener("click", (e) => {
    affichagePageContact ()
  })
}

function affichagePageContact () {
  /* Background de la page */
  document.body.style.backgroundColor = "#703FBF"

  /* Titre pour la partie mobile */
  let headerTitle = document.getElementById("titreNavigation")
  let titleH1 = document.createElement("h1")
  headerTitle.innerHTML = ""
  titleH1.textContent = "contact"
  headerTitle.appendChild(titleH1)
  
  /* Le contenu de la partie main */
  let main = document.getElementById("main")
  main.innerHTML = ""
  main.className = "contact"
  main.innerHTML = "<h1>Contact</h1>"
}

export {contact, affichagePageContact }
