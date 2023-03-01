import { Container, Flex } from "@chakra-ui/react";
import Item from "./Item";


const ItemList = ({consoles}) => {
  return (
    <>
        <Container maxW="container.lg">
          <Flex gap={"5"}>
            {consoles.map((console) => (
              <Item
              key={console.id}
              id={console.id}
              name={console.name}
              description={console.description}
              price={console.price}
              stock={console.stock}
              category={console.category}
              image={console.image}
              />
              ))}
          </Flex>
        </Container>
    </>    
  );
};

export default ItemList