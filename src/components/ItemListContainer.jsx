import { Heading, Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const { category, subcategoria } = useParams();
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection (db, "videojuegos");
    getDocs(itemsCollection).then((snapshot) =>{
      const docs = snapshot.docs.map((doc)=> ({
        ...doc.data(), 
        id: doc.id
      }));
      setProducts(docs);
    })
  },[])

  const catFilter = products.filter((product) => product.category === category);

  return (
    <div>
      <Center h="100px" color="black">
        <Heading as="h2" size="2xl">
        { !category ? <h2>Catálogo</h2> : <h2>{`${category}`}</h2> }
        </Heading>
      </Center>
        {category ? <ItemList product={catFilter} /> : <ItemList product={products} /> }
    </div>
  );
};

export default ItemListContainer