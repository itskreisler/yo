import {
  IonCard,
  IonCardHeader,
  IonLabel,
  IonToggle,
  IonCardContent,
  IonItem,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react'
import React from 'react'
import { HeaderWithMenuBtn } from '../components/TagHeader'
import { TagLayout } from '../components/TagLayout'
import { useDarkMode } from '../hooks/hooks'
import { usePlatform } from '../hooks/use-platform'
import { PATHS } from './urls'

const Config = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const { OS } = usePlatform()
  const {
    URL_CONFIG: { title }
  } = PATHS
  const titleDarkMode = 'Activa o desactiva el Modo Oscuro'
  return (
    <TagLayout>
      <HeaderWithMenuBtn title={title} />
      {/* Modo oscuro */}
      <IonCard>
        <IonCardHeader>
          {OS === 'iOS'
            ? (
            <IonCardSubtitle>{titleDarkMode}</IonCardSubtitle>
              )
            : (
            <IonCardTitle>{titleDarkMode}</IonCardTitle>
              )}
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel>Modo Oscuro:</IonLabel>
            <IonToggle
              color="success"
              checked={darkMode}
              onIonChange={({ detail: { checked } }) => {
                setDarkMode(checked)
              }}
            />
          </IonItem>
        </IonCardContent>
      </IonCard>
    </TagLayout>
  )
}

export default Config
