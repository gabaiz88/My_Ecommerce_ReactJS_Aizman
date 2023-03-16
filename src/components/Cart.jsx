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
} from "@chakra-ui/react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  
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
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Quantity: {item.quantity}</Text>
                <Text>Price: U$D {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("Eliminando")}
                >
                  Delete from cart
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      <FormCart />
    </>
  );
};

export default Cart;
