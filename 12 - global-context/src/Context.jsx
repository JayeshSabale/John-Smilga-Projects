import React, { useContext, createContext, useState } from 'react'

export const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

function AppContext({ children }) {
  const [name, setName] = useState('peter')
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
