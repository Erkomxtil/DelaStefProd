function contact () {
  let contactLink = document.getElementById("contact")
  
  contactLink.addEventListener("click", (e) => {
    affichagePageContact ()
  })
}

function affichagePageContact () {
  let main = document.getElementById("main")
  main.innerHTML = ""
  main.className = "contact"
  main.innerHTML = "<h1>Contact</h1>"
}

export {contact, affichagePageContact }
