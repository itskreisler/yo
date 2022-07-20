import React, { useContext, createContext } from 'react'
import { useLocalStorage } from '../hooks/use-local-storage'
const AppAboutMe = createContext({
  aboutMe: { info: Object(), setInfo: () => {} }
})

export default function AboutMeContext ({ children }) {
  const [info, setInfo] = useLocalStorage('info', {
    name: String(),
    age: Number(),
    stature: String(),
    city: String(),
    allergies: String(),
    diseases: String(),
    rh: String()
  })
  return (

    <AppAboutMe.Provider
      value={{
        aboutMe: { info, setInfo }
      }}
    >
      {children}
    </AppAboutMe.Provider>
  )
}
export function useAboutMeContext () {
  return useContext(AppAboutMe)
}
