import {
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow
} from '@ionic/react'
import React from 'react'
import { HeaderWithMenuBtn, TagLayout } from '../components/Tags'
import { useLocalStorage, useMedia } from '../hooks/hooks'
import { PATHS } from './urls'
import './Personal.information.css'
import { useAboutMeContext } from '../context/AboutMeContext'
// TODO: Añadir los campos adicionales a la informacion personal
const PersonalInformation = () => {
  const {
    URL_PI: { title }
  } = PATHS
  const coverDefault = process.env.PUBLIC_URL + '/assets/icon/favicon.png'
  const movil = useMedia(['(max-width: 992px)'], [true], false)
  const { aboutMe: { info, setInfo } } = useAboutMeContext()
  const [gallery, setGallery] = useLocalStorage('gallery', {
    cover: String()
  })
  const { cover } = gallery
  const { name, age, stature } = info
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
      gallery.cover = reader.result.toString()
      setGallery({ ...gallery })
    }
  }
  const TagAvatarLarge = () => {
    return (
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
    )
  }
  const TagAvatarSmall = () => {
    return (
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
              <i
                className="fa fa-camera"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/assets/icon/camera-sharp.svg')`
                }}
              ></i>
            </div>
          </div>
        </IonCol>
      </IonRow>
    )
  }

  return (
    <TagLayout>
      <HeaderWithMenuBtn title={title} />
      <IonGrid>
        {movil ? <TagAvatarSmall /> : <TagAvatarLarge />}
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
