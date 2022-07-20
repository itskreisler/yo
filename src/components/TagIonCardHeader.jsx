import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react'
import { usePlatform } from '../hooks/use-platform'
const TagIonCardHeader = ({ children }) => {
  const { OS } = usePlatform()

  return <IonCardHeader>
    {OS === 'iOS'
      ? (
      <IonCardSubtitle>{children}</IonCardSubtitle>
        )
      : (
      <IonCardTitle>{children}</IonCardTitle>
        )}
  </IonCardHeader>
}
export { TagIonCardHeader }
