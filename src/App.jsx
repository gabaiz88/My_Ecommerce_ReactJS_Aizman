import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ShoppingCartProvider from "./Context/ShoppingCartContext";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route exact path="/catalogue" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:category"
                element={<ItemListContainer />}
              />
                <Route
                exact
                path="/category/subcategory/:subcategory"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ShoppingCartProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
