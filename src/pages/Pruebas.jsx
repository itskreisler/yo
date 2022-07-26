import {
  IonCol,
  IonGrid,
  IonRow,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react'
import React from 'react'
import ReactJson from 'react-json-view'
import { addSharp } from 'ionicons/icons'
import { HeaderWithMenuBtn, TagLayout, TagLinkTo } from '../components/Tags'
import { PATHS } from './urls'
import { useAboutMeContext } from '../context/AboutMeContext'

import './Pruebas.css'

const Pruebas = () => {
  const {
    URL_CONFIG,
    URL_TEST: { title }
  } = PATHS
  const {
    aboutMe: { info, gallery }
  } = useAboutMeContext()
  const { cover } = gallery
  const coverDefault = process.env.PUBLIC_URL + '/assets/icon/favicon.png'
  return (
    <TagLayout>
      <HeaderWithMenuBtn title={title} />
      <IonGrid>
        <IonRow
          className="ion-align-items-center"
          style={{ justifyContent: 'center' }}
        >
          <IonCol
            className="ion-align-self-center"
            style={{ textAlign: 'center' }}
            size={6}
            sizeMd={12}
          >
            <TagLinkTo to={URL_CONFIG.path}>
              <IonText>Hello World!</IonText>
            </TagLinkTo>
          </IonCol>
          <IonCol size={12}>
            <ReactJson
              theme={'tomorrow'}
              name="informacion"
              src={info}
              enableClipboard={false}
            />
          </IonCol>
          <IonCol size>
            <div className="cl-card">
              <div
                className="cl-card-img"
                style={{
                  backgroundImage: `url('${cover || coverDefault}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="cl-card-info">
                <p className="cl-text-body">Edad: {info.age}</p>
                <p className="cl-text-title">Nombre: {info.name}</p>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          routerLink={URL_CONFIG.path}
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
