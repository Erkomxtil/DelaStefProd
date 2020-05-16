function contact() {
  let contactLink = document.getElementById("contact")

  contactLink.addEventListener("click", (e) => {
    affichagePageContact()
  })
}

function affichagePageContact() {
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
  let form = document.createElement("form")
  let firstName = document.createElement("input")
  let lastName = document.createElement("input")
  let email = document.createElement("input")
  let message = document.createElement("textarea")
  let submit = document.createElement("input")
  main.innerHTML = ""
  main.className = "contact"

  firstName.id = "prenom"
  firstName.type = "text"
  firstName.placeholder = "Prénom"
  lastName.id = "nom"
  lastName.type = "text"
  lastName.placeholder = "Nom"
  email.id = "email"
  email.type = "email"
  email.placeholder = "Votre adresse mail"
  message.id = "text"
  message.placeholder = "Votre message"
  submit.type = "submit"
  submit.name = "submit"
  submit.value = "Envoyer"


  form.appendChild(firstName)
  form.appendChild(lastName)
  form.appendChild(email)
  form.appendChild(message)
  form.appendChild(submit)
  main.appendChild(form)

  /* Vérification des données du formulaire avant envoi */
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (firstName.value === "") {
      firstName.placeholder = "Veuillez entrez votre prénom !"
      firstName.focus()
    } else {
      firstName.placeholder = "Prénom"
    }
    
    if (lastName.value === "") {
      lastName.placeholder = "Veuillez entrez votre nom !"
      lastName.focus()
    } else {
      lastName.placeholder = "Nom"
    }

    if (email.value === "") {
      email.placeholder = "Veuillez entrez une adresse mail valide"
      email.focus()
    } else {
      email.placeholder = "Votre adresse mail"
    }

    if (email.value.indexOf("@", 0) < 0) {
      email.textContent = "Veuillez entrez une adresse mail valide"
      email.focus();
    }

    if (email.value.indexOf(".", 0) < 0) {
      email.textContent = "Veuillez entrez une adresse mail valide"
      email.focus();
    }

    if (message.value === "") {
      message.textContent = "Veuillez entrez un message valide"
      message.focus()
    } else {
      message.placeholder = "Votre message"
    }
    
    /* Constitution d'un objet avec les valeurs des champs du formulaire pour l'envoie au serveur */
    const prenom = firstName.value
    const nom = lastName.value
    const mail = email.value
    const texte = message.value

    const data = {
      "prenom": prenom,
      "nom": nom,
      "email": mail,
      "texte": texte
    }
  })
}

export { contact, affichagePageContact }