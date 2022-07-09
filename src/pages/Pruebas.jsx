import {
  IonCol, IonGrid, IonRow, IonText, IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react'
import React from 'react'
import {
  addSharp
} from 'ionicons/icons'
import { HeaderWithMenuBtn } from '../components/TagHeader'
import { TagLayout } from '../components/TagLayout'
import { TagLinkTo } from '../components/TagLinkTo'

import { PATHS } from './urls'

const Pruebas = () => {
  const {
    URL_TEST: { title }
  } = PATHS
  return (
    <TagLayout>
      <HeaderWithMenuBtn title={title} />
      <IonGrid>
        <IonRow className='ion-align-items-center' style={{ justifyContent: 'center' }}>
          <IonCol className="ion-align-self-center" style={{ textAlign: 'center' }} size={6} sizeMd={12}>
            <TagLinkTo to='/config'>
              <IonText>hola mundo</IonText>
            </TagLinkTo>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            routerLink={'/config'}
            routerDirection="none"
            color={'dark'}
            size="small"
          >
            <IonIcon icon={addSharp} size="large" />
          </IonFabButton>
        </IonFab>
    </TagLayout>
  )
}

export default Pruebas
