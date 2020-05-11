import { start } from './animation.js'
import { ajaxGet } from './ajax.js'
import { navigation, mobileNavLink, currentLink } from './nav.js'
import { accueil, affichagePageAccueil } from './accueil.js'
import { realisations, affichagePageRealisations } from './realisations.js'
import { contact } from './contact.js'

/* Initaliser toutes les fonctions */
function initialisation () {
  start()
  ajaxGet()
  navigation()
  mobileNavLink()
  currentLink()
  realisations()
  accueil()
  affichagePageRealisations()
  affichagePageAccueil()
  contact()
}

initialisation()
