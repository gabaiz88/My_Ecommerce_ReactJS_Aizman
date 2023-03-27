import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Flex } from "@chakra-ui/react";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="aboutUs">
        <h2>Acerca de nosotros..</h2>
        <div>
          Somos una tienda especializada en la venta de consolas, juegos,
          accesorios, muñecos y cientos de artículos relacionados con
          Videojuegos y más!
        </div>
      </div>
      <div className="footer_categories">
        <h2>Categorías</h2>
        <ul>
          <Link to={`/category/${"Ps4"}`}>
            <li>
              <h3>PlayStation 4</h3>
            </li>
          </Link>{" "}
          <Link to={`/category/${"Ps5"}`}>
            <li>
              <h3>PlayStation 5</h3>
            </li>
          </Link>
          <Link to={`/category/${"Xbox"}`}>
            <li>
              <h3>Xbox</h3>
            </li>
          </Link>{" "}
          <Link to={`/category/${"Nintendo"}`}>
            <li>
              <h3>Nintendo</h3>
            </li>
          </Link>
        </ul>
      </div>
      <div className="footer_contact">
        <h2>Contactanos</h2>
        <Link target="_blank" to={"https://wa.link/6cnj10"}>
          <Flex alignItems="center" gap={2}>
            <FontAwesomeIcon icon={faWhatsapp} fontSize={22} />
            <h4>1165858350</h4>
          </Flex>
        </Link>
        <Flex alignItems="center" gap={2}>
          <FontAwesomeIcon icon={faEnvelope} fontSize={22} />
          <button
            onClick={() => (window.location = "mailto:gabaiz88@gmail.com")}
          >
            gabaiz88@gmail.com
          </button>
        </Flex>
        <Link target="_blank" to={"https://goo.gl/maps/kjMzH9j4pm9SXN6d9"}>
          <Flex alignItems="center" gap={2}>
            <FontAwesomeIcon icon={faLocationDot} fontSize={22} />
            <h4>Av. Díaz Vélez, C1414 CABA</h4>
          </Flex>
        </Link>
      </div>
      <div className="footer_networks">
        <h2>Sigamos Conectados..</h2>
        <div className="networks">
        <Link target="_blank" to={"https://www.instagram.com"}>
            <i><FontAwesomeIcon icon={faInstagram}/></i>
          </Link>
          <Link target="_blank" to={"https://www.twitter.com"}>
            <i><FontAwesomeIcon icon={faTwitter}/></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
