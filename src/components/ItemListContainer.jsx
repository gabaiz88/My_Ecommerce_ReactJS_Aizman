import Data from "../data.json";
import { Heading, Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();

  const catFilter = Data.filter((console) => console.category === category);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        return(Data);
      }, 2000);
    })
  }

  async function fetchingData () {
    try {
      const dataFetched = await getDatos();
      console.log(dataFetched);
    }
    catch (error) {
      console.log(error);
    }
  }

  fetchingData();

  return (
    <div>
      <Center h="100px" color="black">
        <Heading as="h2" size="2xl">
          Consolas
        </Heading>
      </Center>
        <ItemList consoles={Data}/>
    </div>
  );
};

export default ItemListContainer