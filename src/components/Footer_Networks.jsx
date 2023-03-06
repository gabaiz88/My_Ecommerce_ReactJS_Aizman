import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Networks = () => {
  const instagram = () => {
    window.location.href = "https://www.instagram.com";
  };

  const twitter = () => {
    window.location.href = "https://www.twitter.com";
  };

  return (
    <div className="footer_networks">
      <h2>Sigamos Conectados..</h2>
      <div className="networks">
        <button onClick={instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </button>
        <button onClick={twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </button>
      </div>
    </div>
  );
};

export default Networks;
