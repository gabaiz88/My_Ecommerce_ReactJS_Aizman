import { Link } from "react-router-dom";
import FormCart from "./FormCart";
import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import {
  Button,
  Container,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart, totalAmount, removeProduct } = useContext(CartContext);

  function currencyFormat(num) {
    return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }


  if (cart.length === 0) {
    return (
      <>
        <div className="cart_">
          <h2>El carrito esta vacio..</h2>
          <Link to={"/catalogue"}>
            <Button colorScheme="red">Ir al catálogo</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="main_cart">
      {cart.map((item) => {
        return (
          <Container key={item.id} className="cart_container">
            <Card className="cards">
              <Box className="img_item">
                <img src={item.image} alt="imagen_producto" />
              </Box>
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Subtotal: {currencyFormat(item.price * item.quantity)}.-</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => removeProduct(item.id)}
                >
                  X
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      <div className="tag_total_amount">Total: {currencyFormat(totalAmount)}.-</div>
      <FormCart />
    </div>
  );
};

export default Cart;
