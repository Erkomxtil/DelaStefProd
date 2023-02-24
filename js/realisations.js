import { ajaxGet } from "./ajax.js";

function realisations() {
  let realisationsBtn = document.getElementById("realisations");
  let main = document.getElementById("main");

  realisationsBtn.addEventListener("click", (e) => {
    affichagePageRealisations();
  });
}

function affichagePageRealisations() {
  /* Background de la page */
  document.body.style.backgroundColor = "#1f4a99";

  ajaxGet("https://delastef.netlify.app/data.json", (reponse) => {
    let dataInfos = JSON.parse(reponse);

    /* Titre pour la partie mobile */
    function titreMobile() {
      let headerTitle = document.getElementById("titreNavigation");
      let titleH1 = document.createElement("h1");
      headerTitle.innerHTML = "";
      titleH1.textContent = "réalisations";
      headerTitle.appendChild(titleH1);
    }

    /* Le contenu de la partie main */
    let main = document.getElementById("main");
    let realisationsInfos = dataInfos.realisations;

    main.innerHTML = "";
    main.className = "realisations";

    /* affichage des logos sur la page */
    function blockImg() {
      let imagesBlock = document.createElement("img");
      let wrapper = document.createElement("div");

      for (let i = 0; i < realisationsInfos.length; i++) {
        wrapper.className = "realisationsBlock";
        imagesBlock.className = "imgLink";
        imagesBlock.src = realisationsInfos[i].logo;
        imagesBlock.alt = realisationsInfos[i].entreprise;
        imagesBlock.dataset.numeroLogo = i;

        wrapper.appendChild(imagesBlock);
        main.appendChild(wrapper);
      }
      main.innerHTML = "";
      imagesBlock.addEventListener("click", infosBlock());
    }

    /* affichage complet logo plus informations */
    function infosBlock() {
      for (let i = 0; i < realisationsInfos.length; i++) {
        let wrapper = document.createElement("div");
        let imagesBlock = document.createElement("img");

        wrapper.className = "realisationsBlock";
        imagesBlock.className = "imgLink";
        imagesBlock.src = realisationsInfos[i].logo;
        imagesBlock.alt = realisationsInfos[i].entreprise;
        imagesBlock.dataset.numeroLogo = i;

        wrapper.addEventListener("mouseenter", (e) => {
          imagesBlock.src = realisationsInfos[i].hover;
          imagesBlock.title = realisationsInfos[i].entreprise;
        });
        wrapper.addEventListener("mouseleave", (e) => {
          wrapper.innerHTML = "";
          imagesBlock.src = realisationsInfos[i].logo;
          wrapper.appendChild(imagesBlock);
        });

        wrapper.appendChild(imagesBlock);
        main.appendChild(wrapper);

        imagesBlock.addEventListener("click", (e) => {
          main.innerHTML = "";
          let numeroLogo = e.currentTarget.dataset.numeroLogo;
          let date = realisationsInfos[numeroLogo].date;
          let entreprise = realisationsInfos[numeroLogo].entreprise;
          let fonction = realisationsInfos[numeroLogo].fonction;
          let environement = realisationsInfos[numeroLogo].environement;
          let description = realisationsInfos[numeroLogo].description;
          let logo = realisationsInfos[numeroLogo].logo;
          let lien = realisationsInfos[numeroLogo].lien;
          let lienFinal = "";

          if (lien !== "") {
            lienFinal =
              '<br><span class="boldinfos">Lien : </span><br>' +
              '<a href="' +
              lien +
              '" target="_blank">' +
              lien +
              "</a>";
          }

          let wrapperInfos = document.createElement("div");
          let photo = document.createElement("figure");
          let paragrapheInfos = document.createElement("p");
          let closeInfos = document.createElement("span");
          wrapperInfos.id = "wrapperInfos";
          photo.innerHTML =
            '<img class="imgLink" src="' + logo + '" alt="' + entreprise + '">';
          paragrapheInfos.innerHTML =
            date +
            '<br><span class="boldinfos">Entreprise : </span><br><span class="entreprise">' +
            entreprise +
            '</span><br><span class="boldinfos">Fonction : </span><br>' +
            fonction +
            '<br><span class="boldinfos">Environement : </span><br>' +
            environement +
            '<br><span class="boldinfos">Description : </span><br>' +
            description +
            lienFinal;

          closeInfos.id = "closeInfos";
          closeInfos.textContent = "X";

          photo.appendChild(closeInfos);
          wrapperInfos.appendChild(photo);
          wrapperInfos.appendChild(paragrapheInfos);
          main.appendChild(wrapperInfos);

          closeInfos.addEventListener("click", (e) => {
            main.innerHTML = "";
            blockImg();
          });
        });
      }
    }

    /* Affichage animation flèche pour la suite des réalisations */
    function arrowGoDown() {
      const arrowBlock = document.createElement("div");
      arrowBlock.className = "arrowBlock";
      main.append(arrowBlock);
    }

    /* Enlève la flèche du bas au scroll de l'utilisateur */
    function flecheOut() {
      var scrollUser = document.documentElement.scrollTop;
      var flecheDown = document.querySelector(".arrowBlock");

      if (scrollUser > 0 && flecheDown !== null) {
        flecheDown.style.display = "none";
      } else {
        if (flecheDown !== null) {
          flecheDown.style.display = "block";
        }
      }
    }

    window.onscroll = flecheOut;

    titreMobile();

    infosBlock();

    arrowGoDown();
  });
}

export { realisations, affichagePageRealisations };
