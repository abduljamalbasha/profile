import React, { useState } from 'react'
import Context from './context'

const ContextProvider = ({ children }) => {
  const initialAppState = {
    isOpen:false
  }

  const [appState, setAppState ] = useState(initialAppState)

  return (
    <Context.Provider
      value={{
        appState,
        isOpenClicked: (isOpen) => {
          setAppState((prevState) => {
            return { ...prevState, isOpen }
          })
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
