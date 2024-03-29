import { Container, Flex } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ product }) => {
  return (
    <>
      <Container maxW="90%">
        <Flex gap={"10"} wrap="wrap">
          {product.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              category={product.category}
              image={product.image}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default ItemList;
