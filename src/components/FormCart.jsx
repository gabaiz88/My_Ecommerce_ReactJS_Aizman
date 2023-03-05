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

const FormCart = () => {
  return (
    <div className="form_cart">
      <FormControl isRequired>
        <FormLabel>Nombre</FormLabel>
        <Input focusBorderColor="lime" placeholder="Nombre" />
        <FormLabel>Apellido</FormLabel>
        <Input focusBorderColor="lime" placeholder="Apellido" />
        <FormLabel>Country</FormLabel>
        <Select focusBorderColor="lime" placeholder="Pais">
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
        <Button left="60%" colorScheme="whatsapp">
          Confirmar Compra
        </Button>
      </FormControl>
    </div>
  );
};

export default FormCart;