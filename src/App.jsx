import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <ChakraProvider>
      <NavBar/>
      </ChakraProvider>
    </>
  )
}

export default App