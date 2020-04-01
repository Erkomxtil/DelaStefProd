import { ajaxGet } from './ajax.js'
import { navigation } from './nav.js'
import { cvPage } from './cv.js'
import { portfolio } from './portfolio.js'
import { accueil } from './accueil.js'
import { contact } from './contact.js'

/* Initaliser toutes les fonctions */
function initialisation () {
  ajaxGet()
  navigation()
  accueil()
  cvPage()
  portfolio()
  contact()
}

initialisation()
