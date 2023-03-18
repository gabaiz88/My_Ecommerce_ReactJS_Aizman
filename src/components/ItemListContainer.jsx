import { Heading, Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ItemListContainer = () => {
  const { category, subcategoria } = useParams();
  const [ products, setProducts ] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    console.log(isLoading);
    const db = getFirestore();

    const itemsCollection = collection (db, "videojuegos");
    getDocs(itemsCollection).then((snapshot) =>{
      const docs = snapshot.docs.map((doc)=> ({
        ...doc.data(), 
        id: doc.id
      }));
      setProducts(docs);
      setIsLoading(false);
    })
  },[])

  const catFilter = products.filter((product) => product.category === category);

  function render() {
    if(isLoading){
      return <Loading />
    }
    else{
     return category ? <ItemList product={catFilter} /> : <ItemList product={products} />
    }
  }

  return (
    <div>
      <Center h="100px" color="black">
        <Heading as="h2" size="2xl">
        { !category ? <h2>Catálogo</h2> : <h2>{`${category}`}</h2> }
        </Heading>
      </Center>
      {render()}
    </div>
  );
};

export default ItemListContainer