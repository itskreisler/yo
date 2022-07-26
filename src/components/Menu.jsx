import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonText
} from '@ionic/react'
import { useLocation } from 'react-router-dom'
import { bookmarkOutline } from 'ionicons/icons'
import { appPages } from '../pages/urls'
import './Menu.css'

import { useDarkMode } from '../hooks/use-dark-mode'
import { useEffect } from 'react'
import { usePlatform } from '../hooks/use-platform'
import { useAboutMeContext } from '../context/AboutMeContext'

const Menu = () => {
  const { pathname } = useLocation()
  const { aboutMe: { info: { name } } } = useAboutMeContext()
  const temp = appPages.find(({ url, title }) => url === pathname && { title })
  const labels = []
  useDarkMode()
  const { OS } = usePlatform()
  useEffect(() => {
    document.title = temp?.title
    // console.log('public url: ', process.env.PUBLIC_URL)
  }, [temp])
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{temp?.title}</IonListHeader>
          <IonNote>{OS}</IonNote>
          <IonText>{name && `@${name.trim().replace(/\s+/g, '_')}`}</IonText>
          {appPages.map(({ url, title, mdIcon, iosIcon }, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={pathname === url ? 'selected' : ''}
                  routerLink={url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={iosIcon} md={mdIcon} />
                  <IonLabel>{title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
