import Data from "../data.json";
import { Heading, Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();

  const catFilter = Data.filter((console) => console.category === category);
  console.log(catFilter);

  return (
    <div>
      <Center h="100px" color="black">
        <Heading as="h2" size="2xl">
        { !category ? <h2>Consolas</h2> : <h2>{`${category}`}</h2> }
        </Heading>
      </Center>
        {category ? <ItemList consoles={catFilter} /> : <ItemList consoles={Data} /> }
    </div>
  );
};

export default ItemListContainer