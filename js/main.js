import { ajaxGet } from './ajax.js'
import { navigation, mobileNavLink } from './nav.js'
import { accueil, affichagePageAccueil } from './accueil.js'
import { realisations, affichagePageRealisations } from './realisations.js'
import { contact } from './contact.js'

/* Initaliser toutes les fonctions */
function initialisation () {
  ajaxGet()
  navigation()
  mobileNavLink()
  accueil()
  realisations()
  affichagePageRealisations()
  affichagePageAccueil()
  contact()
}

initialisation()
