import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'

const Card_Prueba = ({cantidad}) => {

    const [cant, setCantidad] = useState(1);
    const stock = 20;

  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='10' ml="9">
    <Button variant='solid' colorScheme='blue' w="20" onClick={() => cant > 1 ? setCantidad(cant -1) : 1}>
        -
      </Button>
        <p className="items_cantidad">{cant}</p>
      <Button variant='solid' colorScheme='blue' w="20" onClick={() => cant < stock ? setCantidad(cant + 1) : stock}>
        +
      </Button>
    </ButtonGroup>
  </CardFooter>
  <Button variant='solid' colorScheme='red' onClick={() => cantidad(cant)}>Agregar al Carrito</Button>
</Card>
  )
}

export default Card_Prueba