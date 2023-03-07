import cart from "../assets/shopping-cart.png";
import { Flex } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartFlatbed, faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({}) => {
  return (
    <>       
    <Flex>
            <i><FontAwesomeIcon icon={faCartShopping} color="#fff" fontSize={40} /></i>
            <p className="cantidad_items">{1}</p>
    </Flex>
    </>
  )
}

export default CartWidget