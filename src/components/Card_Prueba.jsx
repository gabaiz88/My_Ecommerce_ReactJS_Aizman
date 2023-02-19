import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import ps4 from "../assets/play4.jpg"

const Card_Prueba = ({cantidad}) => {

    const [cant, setCantidad] = useState(1);
    const stock = 20;

  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={ps4}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Playstation 4</Heading>
      <Text>
        PlayStation presenta una nueva opción para los gamers con PS4 Pro, una poderosa adición a la familia PS4. Está diseñada para ofrecer una mayor experiencia de juego, ya sea a través de su HDTV existente o un nuevo televisor 4K.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $120.000.-
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