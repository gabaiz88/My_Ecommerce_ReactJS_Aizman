import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Card_Prueba from './components/Card_Prueba'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  
  const cantidad = (cantidad) => {
    cantidad = cantidad;
  };

  return (
    <>
      <ChakraProvider>
      <NavBar cantidad={cantidad}/>
      <ItemListContainer greeting={"Bienvenidos a NiMiGames"}/>
      <Card_Prueba cantidad={cantidad}/>
      </ChakraProvider>
    </>
  )
}

export default App