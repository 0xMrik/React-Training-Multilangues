'use client'
import React from 'react'
import Contenu from './Components/Contenu'
import ToggleLangs from './Components/ToggleLangs'
import ContextProvider from './context/langContext'

const App = () => {
  return (
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
  )
}

export default App