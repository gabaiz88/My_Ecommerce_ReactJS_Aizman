import React from "react";
import { Button, Flex, Spacer, Box, Heading, ButtonGroup, Grid } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Flex minWidth="max-content" alignItems="center" gap="2" w="80%">
          <Box p="5" ml="20">
            <Heading size="md">LOGO</Heading>
          </Box>
          <Spacer />
            <Flex >
                <ButtonGroup gap="7" justify="center">
                <Button colorScheme="teal">Inicio</Button>
                <Button colorScheme="teal">Consolas</Button>
                <Button colorScheme="teal">Juegos</Button>
                <Button colorScheme="teal">Accesorios</Button>
                <Button colorScheme="teal">Contacto</Button>
                </ButtonGroup>
            </Flex>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
