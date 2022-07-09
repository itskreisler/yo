import { IonPage, IonContent } from '@ionic/react'

const TagLayout = ({ children, header = <></>, footer = <></> }) => {
  return (
      <IonPage>
        {header}
        <IonContent fullscreen>{children}</IonContent>
        {footer}
      </IonPage>
  )
}

export { TagLayout }
