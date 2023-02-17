import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ComponenteA from './components/ComponenteA'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <ChakraProvider>
      <NavBar/>
      <ComponenteA/>
      </ChakraProvider>
    </>
  )
}

export default App