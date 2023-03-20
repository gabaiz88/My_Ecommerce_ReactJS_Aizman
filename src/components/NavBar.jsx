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
                    Accesorios
                  </MenuButton>
                  <MenuList bg="#383838">
                    <Link to={`/category/subcategory/${"Joystick"}`}>
                      <MenuItem bg="ligth">
                       <img className="imagen_consola" src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coder-b2d15.appspot.com/o/Joystick_Snes_ico.png?alt=media&token=2ad52680-50db-4f83-90f6-280238f3f53a" alt="" />
                        Joystick
                      </MenuItem>
                    </Link>
                    <Link to={`/category/${"Llavero"}`}>
                      <MenuItem bg="ligth">
                        <img className="imagen_consola" src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-coder-b2d15.appspot.com/o/Llavero_ico.png?alt=media&token=9eada56f-ca1f-48e3-8722-03018ab6316f" alt="" />
                        Llaveros
                      </MenuItem>
                    </Link>
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
