import { Link } from "react-router-dom";
import FormCart from "./FormCart"
import { Button } from "@chakra-ui/react";

const Cart = () => {
  let cart = "";
  
  if (cart === "dasd") {
    return (
      <>
      <div className="cart_">
        <h2>El carrito esta vacio..</h2>
        <Link to={"/catalogue"}>
          <Button colorScheme='red'>Ir al catálogo</Button>
        </Link>
      </div>
      </>
    )
  } else {
    return (
      <>
      <div className="cart_">
        <p>Aca va el resumen de la compra</p>
        <FormCart />
      </div>
      </>
    )
  }
  
}

export default Cart