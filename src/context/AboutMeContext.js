import React, { useContext, useState, useEffect, createContext } from 'react'
const AppAboutMe = createContext({
  about: {
    me: {}
  }
})

export default function AboutMeContext ({ children }) {
  const [me, setMe] = useState()
  useEffect(() => { setMe({ name: 'Kreisler' }) }, [])
  return (

    <AppAboutMe.Provider
      value={{
        about: {
          info: me
        }
      }}
    >
      {children}
    </AppAboutMe.Provider>
  )
}
export function useAboutMeContext () {
  return useContext(AppAboutMe)
}
