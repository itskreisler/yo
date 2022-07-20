import {
  IonCard,
  IonLabel,
  IonToggle,
  IonCardContent,
  IonItem,
  IonButton, IonIcon, useIonAlert, useIonToast
} from '@ionic/react'
import { trashSharp } from 'ionicons/icons'
import React from 'react'
import { HeaderWithMenuBtn, TagIonCardHeader, TagLayout } from '../components/Tags'
import { useDarkMode, useLS } from '../hooks/hooks'
import { PATHS } from './urls'

const Config = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const [tagAlert] = useIonAlert()
  const [tagToast] = useIonToast()
  const {
    URL_CONFIG: { title }
  } = PATHS
  const titleDarkMode = 'Activa o desactiva el Modo Oscuro'

  const handleDeleteInfoAll = () => {
    tagAlert({
      header: '¿Borrar todo?',
      message:
        '¡Puedes hacer una copia de seguridad antes de borrar todo!',
      buttons: [
        'Cancelar',
        {
          text: 'Borrar',
          handler: (d) => {
            useLS.c()
            tagToast({
              message: 'A sido eliminado con exito!',
              duration: 3000
            })
            setTimeout(() => { window.location.reload() }, 1000)
          }
        }
      ]
    })
  }

  return (
    <TagLayout>
      <HeaderWithMenuBtn title={title} />
      {/* Modo oscuro */}
      <IonCard>
        <TagIonCardHeader>{titleDarkMode}</TagIonCardHeader>
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
      {/*  */}
      <IonCard>
        <TagIonCardHeader>Borrar datos</TagIonCardHeader>
        <IonCardContent>
        <IonButton expand="block" fill="outline" color="danger" onClick={handleDeleteInfoAll}>
        <IonIcon slot="start" icon={trashSharp} />
        Eliminar
        </IonButton>
        </IonCardContent>
      </IonCard>
    </TagLayout>
  )
}

export default Config
