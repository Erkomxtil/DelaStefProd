
function realisations () {
  let main = document.getElementById("main")
  let cvLink = document.getElementById("realisations")
  
  cvLink.addEventListener("click", (e) => {
    main.innerHTML = ""
    main.className = "realisations"
    main.innerHTML = "<h1>Mes réalisations</h1>"
  })
}

export { realisations }
