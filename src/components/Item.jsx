import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import currencyFormat from "../utils/functions";

//Detalle individual de cada item
const Item = ({ id, name, description_short, price, image }) => {
  return (
    <div>
      <div key={id}>
        <Flex alignItems="center">
          <Card maxW="sm" width={300} minH={"auto"}>
            <CardBody>
              <Image src={image} width={250} />
              <Stack mt="6" spacing="3">
                <Heading size="sm">{name}</Heading>
                <Text>{description_short}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {currencyFormat(1 * price)}.-
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Center className="btn-center">
                <Link to={`/item/${id}`}>
                  <Button variant="solid" colorScheme="blue">
                    Detalles
                  </Button>
                </Link>
              </Center>
            </CardFooter>
          </Card>
        </Flex>
      </div>
    </div>
  );
};

export default Item;
