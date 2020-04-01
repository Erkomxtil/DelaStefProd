
function cvPage () {
  let main = document.getElementById("main")
  let cvLink = document.getElementById("cv")
  
  cvLink.addEventListener("click", (e) => {
    main.innerHTML = ""
    main.className = "cv"
    main.innerHTML = "<h1>Mon Cv</h1>"
  })
}

export {cvPage}
