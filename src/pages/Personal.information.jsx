import {
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonButton,
  IonIcon,
  IonChip,
  IonAccordion,
  IonAccordionGroup
} from '@ionic/react'
import {
  closeSharp,
  closeCircle
} from 'ionicons/icons'
import React, { useRef } from 'react'
import { HeaderWithMenuBtn, TagLayout } from '../components/Tags'
import { useKey } from 'rooks'
import { useMedia } from '../hooks/hooks'
import { PATHS } from './urls'
import { useAboutMeContext } from '../context/AboutMeContext'

import './Personal.information.css'
// TODO: Añadir los campos adicionales a la informacion personal
const PersonalInformation = () => {
  const {
    URL_PI: { title }
  } = PATHS
  const coverDefault = process.env.PUBLIC_URL + '/assets/icon/favicon.png'
  const movil = useMedia(['(max-width: 992px)'], [true], false)
  const {
    aboutMe: { info, setInfo, gallery, setGallery }
  } = useAboutMeContext()
  const inputAllergie = useRef()
  const inputDiseases = useRef()
  const { cover } = gallery
  const { name, age, stature, city, allergies, diseases, rh } = info
  const separador = '|'
  const handleChangeInfo = (e) => {
    const {
      target: { name, value }
    } = e
    info[name] = value
    setInfo({ ...info })
  }
  const inputEnterAllergie = (e) => {
    const {
      current: { value }
    } = inputAllergie
    value && handleChangeInfoAllergie()
  }
  const inputEnterDiseases = (e) => {
    const {
      current: { value }
    } = inputDiseases
    value && handleChangeInfoDiseases()
  }
  useKey(['Enter'], inputEnterAllergie, {
    target: inputAllergie
  })
  useKey(['Enter'], inputEnterDiseases, {
    target: inputDiseases
  })
  const handleChangeInfoAllergie = () => {
    const {
      current: { name, value }
    } = inputAllergie
    info[name] += value ? `${value}${separador}` : ''
    value && setInfo({ ...info })
    inputAllergie.current.value = String()
  }
  const handleChangeInfoDiseases = () => {
    const {
      current: { name, value }
    } = inputDiseases
    info[name] += value ? `${value}${separador}` : ''
    value && setInfo({ ...info })
    inputDiseases.current.value = String()
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
        {cover && (
          <IonRow className="j-c-c">
            <IonCol size>
              <IonButton
                size="small"
                expand="block"
                fill="outline"
                color="danger"
                onClick={() => {
                  gallery.cover = String()
                  setGallery({ ...gallery })
                }}
              >
                <IonIcon slot="start" icon={closeSharp} />
                Borrar Foto
              </IonButton>
            </IonCol>
          </IonRow>
        )}

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
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonItem>
              <IonLabel position="floating">Ciudad:</IonLabel>
              <IonInput
                value={city}
                name="city"
                onIonChange={handleChangeInfo}
                clearInput
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonItem>
              <IonLabel position="floating">Tipo de Sangre:</IonLabel>
              <IonInput
                value={rh}
                name="rh"
                onIonChange={handleChangeInfo}
                clearInput
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonItem>
              <IonLabel>Alergias:</IonLabel>
              <IonButton
                slot="end"
                fill="outline"
                color={'success'}
                onClick={handleChangeInfoAllergie}
              >
                Añadir
              </IonButton>
              <IonInput
                ref={inputAllergie}
                name="allergies"
                clearInput
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonItem>
              <IonLabel>Enfermedades:</IonLabel>
              <IonButton slot="end" fill="outline" color={'success'}
              onClick={handleChangeInfoDiseases}>
                Añadir
              </IonButton>
              <IonInput
                ref={inputDiseases}
                name="diseases"
                clearInput
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size="12">
            <IonAccordionGroup expand="inset">
              <IonAccordion value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>Alergias</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  {!allergies && 'No hay alergias'}
                  {allergies &&
                    allergies
                      .split(separador)
                      .map(
                        (item, index) =>
                          item.trim() && (
                            <IonChip key={index} onClick={() => {
                              const arrayAlergia = allergies.split(separador)
                              const indexAlergia = arrayAlergia.findIndex(i => i === item)
                              const AlergiaSin = arrayAlergia.filter((el, indice) => indice !== indexAlergia)
                              handleChangeInfo({ target: { name: 'allergies', value: AlergiaSin.join(separador) } })
                            }}>
                              <IonLabel>{item}</IonLabel>
                              <IonIcon color="danger" icon={closeCircle} />
                            </IonChip>
                          )
                      )}
                </div>
              </IonAccordion>
              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel>Enfermedades</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                {!diseases && 'No hay Enfermedades'}
                {diseases &&
                    diseases
                      .split(separador)
                      .map(
                        (item, index) =>
                          item.trim() && (
                            <IonChip key={index} onClick={() => {
                              const arrayEnfermedad = diseases.split(separador)
                              const indexEnfermedad = arrayEnfermedad.findIndex(i => i === item)
                              const enfermedadSin = arrayEnfermedad.filter((el, indice) => indice !== indexEnfermedad)
                              handleChangeInfo({ target: { name: 'diseases', value: enfermedadSin.join(separador) } })
                            }}>
                              <IonLabel>{item}</IonLabel>
                              <IonIcon color="danger" icon={closeCircle} />
                            </IonChip>
                          )
                      )}
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </IonCol>
        </IonRow>
      </IonGrid>
    </TagLayout>
  )
}

export default PersonalInformation
