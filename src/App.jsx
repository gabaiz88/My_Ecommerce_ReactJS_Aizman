import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'

const App = () => {

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
            <NavBar/>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path='/catalogue' element={<ItemListContainer/>}/> 
          </Routes>       
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App