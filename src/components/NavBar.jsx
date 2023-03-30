import React from "react";
import nintendo from "../assets/nintendo-switch.png";
import ps4 from "../assets/playstation.png";
import ps5 from "../assets/controller.png";
import xbox from "../assets/xbox.png";
import llavero from "../assets/Llavero_ico.png";
import joystick from "../assets/Joystick_Snes_ico.png";
import texto_neon from "../assets/Texto_Neon_Multicolor.png";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">
          <Link to={"/"}>
            {/* Logo */}
            <div className="logo_texto">
              {/* <img id="logo_mario" src={logo} alt="logo mario"/> */}
              <img id="texto_neon" src={texto_neon} alt="texto nimigames" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
              <Link className="link_nav" to="/catalogue">
                Catálogo
              </Link>
            </Nav.Link>
            <NavDropdown
              className="link_nav"
              title="Consolas"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="">
                <Link to={`/category/${"Nintendo"}`}>
                  <div className="dropDrow_item">
                    <img
                      className="imagen_consola"
                      src={nintendo}
                      alt="nintendo"
                    />
                    <h4>Nintendo</h4>
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <Link to={`/category/${"Ps4"}`}>
                  <div className="dropDrow_item">
                    <img
                      className="imagen_consola"
                      src={ps4}
                      alt="playstation 4"
                    />
                    <h4>Ps4</h4>
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <Link to={`/category/${"Ps5"}`}>
                  <div className="dropDrow_item">
                    <img
                      className="imagen_consola"
                      src={ps5}
                      alt="Playstation 5"
                    />
                    <h4>Ps5</h4>
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <Link to={`/category/${"Xbox"}`}>
                  <div className="dropDrow_item">
                    <img className="imagen_consola" src={xbox} alt="Xbox" />
                    <h4>Xbox</h4>
                  </div>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="link_nav">
              <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">
                  <Link to={`/category/subcategory/${"Joystick"}`}>
                    <div className="dropDrow_item">
                      <img
                        className="imagen_consola"
                        src={joystick}
                        alt="Joystick"
                      />
                      <h4>Joystick</h4>
                    </div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to={`/category/subcategory/${"Llaveros"}`}>
                    <div className="dropDrow_item">
                      <img
                        className="imagen_consola"
                        src={llavero}
                        alt="Llaveros"
                      />
                      <h4>Llaveros</h4>
                    </div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Nav.Link href="">
              <Link className="link_nav" to={"/contact"}>
                Contacto
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
