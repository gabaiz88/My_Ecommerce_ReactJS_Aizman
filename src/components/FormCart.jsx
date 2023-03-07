import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  RadioGroup,
  HStack,
  Radio,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import Swal from 'sweetalert2'

const FormCart = () => {

  const comprarProd = (e) => {
    e.preventDefault();
    Swal.fire(
      'Muchas gracias por tu compra!',
      'Te enviaremos un mail a la brevedad',
      'success'
    )
  }

  return (
    <div className="form_cart">
      <form onSubmit={comprarProd}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input focusBorderColor="lime" placeholder="Nombre" />
          <FormLabel>Apellido</FormLabel>
          <Input focusBorderColor="lime" placeholder="Apellido" />
          <FormLabel>País</FormLabel>
          <Select focusBorderColor="lime" placeholder="País">
            <option>Argentina</option>
            <option>Brasil</option>
            <option>Chile</option>
            <option>Uruguay</option>
          </Select>
          <FormLabel>Telefono</FormLabel>
          <Input focusBorderColor="lime" />
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
    </div>
  );
};

export default FormCart;
