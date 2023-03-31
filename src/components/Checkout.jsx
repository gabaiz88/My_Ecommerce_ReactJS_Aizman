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
import withReactContent from "sweetalert2-react-content";

const FormCart = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const db = getFirestore();
  const { cart, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  //guardado de ID de compra en setOrder y llamda a alert + redireccion
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    redirigirCompra(e);
  };

  const redirigirCompra = (e) => {
    e.preventDefault();
    MySwal.fire({
      title: <strong>Muchas gracias por tu compra!</strong>,
      html: (
        <i>
          Te enviaremos un mail a la brevedad con el cupón de pago. Tu ID de
          orden es: {orderId}
        </i>
      ),
      icon: "success",
    });
    setTimeout(() => {
      navigate("/catalogue", { replace: true });
      cleanCart();
    }, 6000);
  };

  const order = {
    name,
    surname,
    email,
    phone,
    cart,
    orderId,
  };

  const orderCollection = collection(db, "order");
  
//Formulario de compra
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
          <Button id="confirm" type="submit" marginTop={5} marginBottom={5} colorScheme="whatsapp">
            Confirmar Compra
          </Button>
        </FormControl>
      </form>
      <p>Nro. de orden: {orderId}</p>
    </div>
  );
};

export default FormCart;
