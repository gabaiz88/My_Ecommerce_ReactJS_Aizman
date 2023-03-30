import { Flex } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";

const CartWidget = ({}) => {
  const { cartQty } = useContext(CartContext);

  return (
    <div className="cartWidget_cart">       
    <Flex>
            <i><FontAwesomeIcon icon={faCartShopping} color="#fff" fontSize={35} /></i>
            <p className="cantidad_items">{cartQty}</p>
    </Flex>
    </div>
  )
}

export default CartWidget