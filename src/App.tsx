import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react'
import { IonReactHashRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import Menu from './components/Menu'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import { appPages, PATHS } from './pages/urls'
import AboutMeContext from './context/AboutMeContext'
setupIonicReact()

const App: React.FC = () => {
  const {
    URL_CONFIG,
    URL_DEFAULT: { path }
  } = PATHS

  return (
    <IonApp>
      <IonReactHashRouter>
        <IonSplitPane contentId="main">
          <AboutMeContext>
            <Menu />
            <IonRouterOutlet id="main">
              {appPages.map(({ url, component }, index) => (
                <Route
                  key={index}
                  path={url}
                  exact={true}
                  component={() => component}
                />
              ))}

              <Route path={path} exact={true}>
                <Redirect to={URL_CONFIG.path} />
              </Route>
            </IonRouterOutlet>
          </AboutMeContext>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  )
}

export default App
