import { Heading, Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ItemListContainer = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "videojuegos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);
      setIsLoading(false);
    });
  }, []);

  const catFilterCategory = products.filter(
    (product) => product.category === category
  );
  const catFilterSubCategory = products.filter(
    (product) => product.subcategory === subcategory
  );

  function render() {
    if (isLoading) {
      return <Loading />;
    } else if (subcategory) {
      return <ItemList product={catFilterSubCategory} />;
    } else {
      return category ? (
        <ItemList product={catFilterCategory} />
      ) : (
        <ItemList product={products} />
      );
    }
  }

  return (
    <div>
      <Center h="100px" color="black"></Center>
      {render()}
    </div>
  );
};

export default ItemListContainer;
