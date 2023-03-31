import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ItemDetailContainer = () => {
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

  function render() {
    if (isLoading) {
      return <Loading />;
    } else {
      return <ItemDetail data={products} />;
    }
  }

  return (
    <>
      <div>{render()}</div>
    </>
  );
};

export default ItemDetailContainer;
