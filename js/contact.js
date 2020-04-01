function contact () {
  let main = document.getElementById("main")
  let contactLink = document.getElementById("contact")
  
  contactLink.addEventListener("click", (e) => {
    main.innerHTML = ""
    main.className = "contact"
    main.innerHTML = "<h1>Contact</h1>"
  })
}

export {contact}
