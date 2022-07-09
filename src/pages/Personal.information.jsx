import {
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow
} from '@ionic/react'
import React from 'react'
import { HeaderWithMenuBtn } from '../components/TagHeader'
import { TagLayout } from '../components/TagLayout'
import { useLocalStorage } from '../hooks/use-local-storage'
import { PATHS } from './urls'
import './Personal.information.css'
const PersonalInformation = () => {
  const {
    URL_PI: { title }
  } = PATHS
  const coverDefault = '/assets/icon/favicon.png'
  const [info, setInfo] = useLocalStorage('info', {
    name: String(),
    age: Number(),
    stature: String(),
    city: String(),
    allergies: String(),
    diseases: String(),
    rh: String(),
    cover: String()
  })
  const { name, age, stature, cover } = info
  const handleChangeInfo = (e) => {
    const {
      target: { name, value }
    } = e
    info[name] = value
    setInfo({ ...info })
  }
  const handleOnChangeFile = (e) => {
    const {
      target: { files }
    } = e
    const reader = new FileReader()

    reader.readAsDataURL(files[0])
    reader.onloadend = () => {
      info.cover = reader.result.toString()
      setInfo({ ...info })
    }
  }
  return (
    <TagLayout>
      <HeaderWithMenuBtn title={title} />
      <IonGrid>
        <IonRow style={{ justifyContent: 'center' }}>
          <IonCol size>
            <div
              style={{
                width: '300px',
                height: '300px',
                backgroundImage: `url('${cover || coverDefault}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: 'circle(50% at 50% 50%)'
              }}
            >
              <input
                type="file"
                className="my_file"
                accept="image/*"
                onChange={handleOnChangeFile}
              />
            </div>
          </IonCol>
        </IonRow>

        <IonRow style={{ justifyContent: 'center' }}>
          <IonCol size>
            <div className="upload">
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundImage: `url('${cover || coverDefault}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'circle(50% at 50% 50%)'
                }}
              />

              <div className="round">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleOnChangeFile}
                />
                <i className="fa fa-camera"></i>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonItem>
              <IonLabel position="floating">Nombre:</IonLabel>
              <IonInput
                value={name}
                maxlength={50}
                name="name"
                onIonChange={handleChangeInfo}
                clearInput
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonItem>
              <IonLabel position="floating">Edad:</IonLabel>
              <IonInput
                type="number"
                value={age}
                name="age"
                onIonChange={handleChangeInfo}
                clearInput
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonItem>
              <IonLabel position="floating">Estatura:</IonLabel>
              <IonInput
                value={stature}
                name="stature"
                onIonChange={handleChangeInfo}
                clearInput
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
    </TagLayout>
  )
}

export default PersonalInformation
