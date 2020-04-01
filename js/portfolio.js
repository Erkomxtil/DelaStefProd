function portfolio () {
  let portfolioBtn = document.getElementById("portfolio")
  let main = document.getElementById("main")

  portfolioBtn.addEventListener("click", (e) => {
    main.innerHTML = ""
    main.className = "portfolio"
    main.innerHTML = "<h1>Porfolio</h1>"
  })
}

export {portfolio}
