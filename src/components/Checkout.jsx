import {
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const FormCart = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const db = getFirestore();
  const { cart, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();

  const comprarProd = (e) => {
    e.preventDefault();
   setTimeout(() => {
      Swal.fire(
        "Muchas gracias por tu compra!",
        `Te enviaremos un mail a la brevedad. En segundos serás redirigido al catálogo`,
        "success"
      );
    }, 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    comprarProd(e);
    setTimeout(() => {
      navigate('/catalogue', { replace: true });
      cleanCart();
    }, 6000);
  }

  const order = {
    name,
    surname,
    email,
    phone,
    cart,
  };

  const orderCollection = collection(db, "orden");

  return (
    <div className="form_cart">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            focusBorderColor="lime"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Apellido</FormLabel>
          <Input
            focusBorderColor="lime"
            placeholder="Apellido"
            onChange={(e) => setSurname(e.target.value)}
          />
          <FormLabel>Email</FormLabel>
          <Input
            focusBorderColor="lime"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>País</FormLabel>
          <Select focusBorderColor="lime" placeholder="País">
            <option>Argentina</option>
            <option>Brasil</option>
            <option>Chile</option>
            <option>Uruguay</option>
          </Select>
          <FormLabel>Telefono</FormLabel>
          <Input
            type="number"
            focusBorderColor="lime"
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormLabel>Tipo de teléfono</FormLabel>
          <RadioGroup defaultValue="Celular">
            <HStack spacing="24px">
              <Radio value="Celular">Celular</Radio>
              <Radio value="Fijo">Fijo</Radio>
            </HStack>
          </RadioGroup>
          <Button id="confirm" type="submit" left="60%" colorScheme="whatsapp">
            Confirmar Compra
          </Button>
        </FormControl>
      </form>
      <p>Nro. de orden: {orderId}</p>
    </div>
  );
};

export default FormCart;
