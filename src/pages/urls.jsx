import {
  personOutline,
  personSharp,
  settingsOutline,
  settingsSharp,
  terminalOutline,
  terminalSharp
} from 'ionicons/icons'

import Config from './Config'
import PersonalInformation from './Personal.information'
import Pruebas from './Pruebas'

const pathTitle = ([path, title]) => { return { path, title } }
const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_PI: pathTitle(['/yo/informacion-personal', 'Informacion personal']),
  URL_MFF: '/mis-comidas-favoritas',
  URL_MFC: '/mis-colores-favoritas',
  URL_GFM: '/generos-de-musica-favoritos',
  URL_CQMGH: '/cosas-que-me-gusta-hacer',
  URL_RQPD: '/regalos-que-puedes-darme',
  URL_MTDC: '/mi-top-de-canciones',
  URL_CQNMG: '/cosas-que-no-me-gustan',
  URL_CQO: '/comidas-que-odio',
  URL_MQNMG: '/musica-que-no-me-gusta',
  URL_METAS: '/metas',
  URL_LOVELANGUAGE: '/lenguaje-del-amor',
  URL_HABILIDADES: '/habilidades',
  URL_MIEDOS: '/miedos',
  URL_FA: '/actores-favoritos',
  URL_FM: '/peliculas-favoritas',
  URL_FS: '/cantantes-favoritos',
  URL_FP: '/postres-favoritos',
  URL_MDF: '/mi-fecha-perfecta',
  URL_FIN: '/fin',
  URL_TEST: pathTitle(['/yo/pruebas', 'Mis pruebas']),
  URL_CONFIG: pathTitle(['/yo/config', 'Configuracion'])
}
const appPages = [
  {
    title: PATHS.URL_PI.title,
    url: PATHS.URL_PI.path,
    iosIcon: personOutline,
    mdIcon: personSharp,
    component: <PersonalInformation/>
  },
  {
    title: PATHS.URL_CONFIG.title,
    url: PATHS.URL_CONFIG.path,
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
    component: <Config/>
  },
  {
    title: PATHS.URL_TEST.title,
    url: PATHS.URL_TEST.path,
    iosIcon: terminalOutline,
    mdIcon: terminalSharp,
    component: <Pruebas/>
  }
]
export { PATHS, appPages }
