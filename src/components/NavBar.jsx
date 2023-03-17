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
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Flex maxW="150rem" alignItems="center" gap="2" pt="1">
          <Link to={"/"}>
            <Box display="flex" ml="20">
              <img id="logo_mario" src={logo} />
              <img id="texto_neon" src={texto_neon} alt="" />
            </Box>
          </Link>
          <Spacer />
          <div className="botones_navbar">
            <Flex>
              <ButtonGroup className="botones" gap="7" justify="center">
                <Button colorScheme="teal" variant="link">
                  <Link to={"/catalogue"}>Catálogo</Link>
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
                      <Link to={`/category/${"Nintendo"}`}>
                        <MenuItem bg="ligth">
                          <img className="imagen_consola" src={nintendo} alt="" />
                          Nintendo
                        </MenuItem>
                      </Link>
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Ps4"}`}>
                      <MenuItem bg="ligth">
                        <img className="imagen_consola" src={ps4} alt="" />
                        Ps 4
                      </MenuItem>
                    </Link>  
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Ps5"}`}>
                      <MenuItem bg="ligth">
                        <img className="imagen_consola" src={ps5} alt="" />
                        Ps 5
                      </MenuItem>
                    </Link>  
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Xbox"}`}>
                      <MenuItem bg="ligth">
                        <img className="imagen_consola" src={xbox} alt="" />
                        Xbox
                      </MenuItem>
                    </Link>
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
                    <Link to={`/category/${"Aventura"}`}>
                      <MenuItem bg="ligth">Aventura</MenuItem>
                    </Link>
                    <MenuItem bg="ligth">Deportes</MenuItem>
                    <Link to={`/category/${"Carrera"}`}>
                      <MenuItem bg="ligth">Carrera</MenuItem>
                    </Link>
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
                <Link to={"/contact"}>
                <Button colorScheme="teal" variant="outline">
                  Contacto
                </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </div>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
