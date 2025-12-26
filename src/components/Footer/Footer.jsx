import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      Built with
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />{" "}
      by{" "}
      <a href="https://www.linkedin.com/in/sumanth-kumar-reddy-eega/">
        Sumanth
      </a>
    </footer>
  );
}
