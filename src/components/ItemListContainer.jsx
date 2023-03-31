import { Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Carousel_items from "./Carousel_items";

const ItemListContainer = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Trae los productos de la BD
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

  //Filtra por categoria
  const catFilterCategory = products.filter(
    (product) => product.category === category
  );
  //Filtra por subcategoria
  const catFilterSubCategory = products.filter(
    (product) => product.subcategory === subcategory
  );

  //Si no estan los productos, aparece el loading
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

  //Rutas de link >
  function link_routes() {
    if (category != null) {
      return "Consolas > ";
    } else if (subcategory != null) {
      return "Accesorios > ";
    } 
  }

  function carousel() {
    if (!category && !subcategory){
      return <Carousel_items/>
    }
  }

  return (
    <>
      <div className="links_tree">
        {link_routes()}
        {{ category } ? (
          <Link>
            {category}
            {subcategory}
          </Link>
        ) : (
          {}
        )}
      </div>
      <div>
        {carousel()}
      </div>
      <div>
        <Center color="black"></Center>
        {render()}
      </div>
    </>
  );
};

export default ItemListContainer;
