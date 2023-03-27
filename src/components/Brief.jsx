import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import {
    Button,
    Container,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Box,
  } from "@chakra-ui/react";
  
const Brief = () => {
    const { cart, totalAmount, removeProduct } = useContext(CartContext);

    function currencyFormat(num) {
        return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

  return (
    <>
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
    </>
  )
}

export default Brief