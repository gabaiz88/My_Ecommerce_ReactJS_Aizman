import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import currencyFormat from "../utils/functions";

const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);
  const [ product, setProduct ] = useState([])

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "videojuegos", `${id}`);
    getDoc(oneItem).then((snapshot) =>{
      const doc = snapshot.data();
      setProduct(doc);
    })
  },[])

  const dataFilter = data.filter((dato) => dato.id == id);

  const onAdd = (quantity, id) => {
    addItem(quantity, id);
  }

  return (
    <>
      {dataFilter.map((dato) => (
        <div key={dato.id}>
            <Center>
                <Card maxW="sm">
                <CardBody>
                    <Image src={dato.image} />
                    <Stack mt="6" spacing="3">
                    <Heading size="md">{dato.name}</Heading>
                    <Text>{dato.description_short}</Text>
                    <Text color="blue.600" fontSize="2xl">
                    {currencyFormat(dato.price)}.-
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Center className="card-footer">
                        <ItemCount
                        stock={dato.stock}
                        onAdd={onAdd}
                        id={dato.id}
                        />
                    </Center>
                </CardFooter>
                </Card>
            </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
