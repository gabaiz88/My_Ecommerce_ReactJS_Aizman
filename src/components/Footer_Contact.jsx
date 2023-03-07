import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer_Contact = () => {
  return (
    <div className="footer_contact">
      <h2>Contactános</h2>
      <Link  target="_blank" to={"https://wa.link/6cnj10"}>
        <Flex alignItems="center" gap={2}>
          <FontAwesomeIcon icon={faWhatsapp} fontSize={22} />
          <h4>1165858350</h4>
        </Flex>
      </Link>
      <Flex alignItems="center" gap={2}>
        <FontAwesomeIcon icon={faEnvelope} fontSize={22} />
        <button onClick={() => (window.location = "mailto:gabaiz88@gmail.com")}>
          gabaiz88@gmail.com
        </button>
      </Flex>
      <Link  target="_blank" to={"https://goo.gl/maps/kjMzH9j4pm9SXN6d9"}>
        <Flex alignItems="center" gap={2}>
          <FontAwesomeIcon icon={faLocationDot} fontSize={22} />
          <h4>Av. Díaz Vélez, C1414 CABA</h4>
        </Flex>
      </Link>

    </div>
  );
};

export default Footer_Contact;
