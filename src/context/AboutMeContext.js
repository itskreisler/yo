import React, { useContext, createContext } from 'react'
import { useLocalStorage } from '../hooks/use-local-storage'
const AppAboutMe = createContext({
  aboutMe: {
    info: {
      name: String(),
      age: String(),
      stature: String(),
      city: String(),
      allergies: String(),
      diseases: String(),
      rh: String()
    },
    setInfo: () => {},
    gallery: Object(),
    setGallery: () => {}
  }
})

export default function AboutMeContext ({ children }) {
  const [info, setInfo] = useLocalStorage('info', {
    name: String(),
    age: String(),
    stature: String(),
    city: String(),
    allergies: String(),
    diseases: String(),
    rh: String()
  })
  const [gallery, setGallery] = useLocalStorage('gallery', {
    cover: String()
  })
  return (

    <AppAboutMe.Provider
      value={{
        aboutMe: { info, setInfo, gallery, setGallery }
      }}
    >
      {children}
    </AppAboutMe.Provider>
  )
}
export function useAboutMeContext () {
  return useContext(AppAboutMe)
}
