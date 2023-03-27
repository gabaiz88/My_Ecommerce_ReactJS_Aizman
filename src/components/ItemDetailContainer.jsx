import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Center } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  
  const [ products, setProducts ] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

  function render() {
    if (isLoading) {
      return <Loading />;
    } else {
      return <ItemDetail data={products}/>
    }
  }

    return (
      <div>
        <Center color="black"></Center>
        {render()}
    </div>
  );
};

export default ItemDetailContainer