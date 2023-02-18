import React from "react";
import {
  Button,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import nintendo from "../assets/nintendo-switch.png";
import ps4 from "../assets/playstation.png";
import ps5 from "../assets/controller.png";
import xbox from "../assets/xbox.png";
import logo from "../assets/mario.png";
import texto_neon from "../assets/Texto_Neon_Multicolor.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Flex minWidth="max-content" alignItems="center" gap="2" w="80%" pt="1">
          <Box display="flex"  ml="20">
            <img id="logo_mario" src={logo} />
            <img id="texto_neon" src={texto_neon} alt=""/>
          </Box>
          <Spacer />
          <Flex>
            <ButtonGroup className="botones" gap="7" justify="center">
              <Button colorScheme="teal" variant="link">
                Inicio
              </Button>
              <Menu className="menu_nav">
                <MenuButton
                  bg="light"
                  as={Button}
                  colorScheme="light"
                  rightIcon={<ChevronDownIcon />}
                >
                  Consolas
                </MenuButton>
                <MenuList bg="#383838">
                  <Flex>
                    <MenuItem bg="ligth">
                      <img className="imagen_consola" src={nintendo} alt="" />
                      Nintendo
                    </MenuItem>
                  </Flex>
                  <Flex>
                    <MenuItem bg="ligth">
                      <img className="imagen_consola" src={ps4} alt="" />
                      Ps 4
                    </MenuItem>
                  </Flex>
                  <Flex>
                    <MenuItem bg="ligth">
                      <img className="imagen_consola" src={ps5} alt="" />
                      Ps 5
                    </MenuItem>
                  </Flex>
                  <Flex>
                    <MenuItem bg="ligth">
                      <img className="imagen_consola" src={xbox} alt="" />
                      Xbox
                    </MenuItem>
                  </Flex>
                </MenuList>
              </Menu>
              <Menu className="menu_nav">
                <MenuButton
                  bg="light"
                  as={Button}
                  colorScheme="light"
                  rightIcon={<ChevronDownIcon />}
                >
                  Juegos
                </MenuButton>
                <MenuList bg="#383838">
                  <MenuItem bg="ligth">Accion</MenuItem>
                  <MenuItem bg="ligth">Aventura</MenuItem>
                  <MenuItem bg="ligth">Deportes</MenuItem>
                  <MenuItem bg="ligth">Conduccion</MenuItem>
                  <MenuItem bg="ligth">Simulador</MenuItem>
                </MenuList>
              </Menu>
              <Menu className="menu_nav">
                <MenuButton
                  bg="light"
                  as={Button}
                  colorScheme="light"
                  rightIcon={<ChevronDownIcon />}
                >
                  Accesorios
                </MenuButton>
                <MenuList bg="#383838">
                  <MenuItem bg="ligth">Joystick</MenuItem>
                  <MenuItem bg="ligth">Llaveros</MenuItem>
                  <MenuItem bg="ligth">Varios</MenuItem>
                </MenuList>
              </Menu>
              <Button colorScheme="teal" variant="outline">
                Contacto
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
