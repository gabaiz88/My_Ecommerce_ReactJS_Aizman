import cart from "../assets/shopping-cart.png";
import { Flex } from "@chakra-ui/react"

const CartWidget = ({}) => {
  return (
    <>       
    <Flex>
            <img id="cart" src={cart} alt="" />
            <p className="cantidad_items">{1}</p>
    </Flex>
    </>
  )
}

export default CartWidget