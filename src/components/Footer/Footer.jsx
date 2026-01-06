import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="flex justify-center py-4 font-primary text-gray-700">
      Built with
      <FontAwesomeIcon
        icon={faHeart}
        className="text-red-600 mx-1 animate-pulse"
        aria-hidden="true"
      />{" "}
      by{" "}
      <Link
        to="https://www.linkedin.com/in/sumanth-kumar-reddy-eega/"
        target="_blank"
        rel="noreference"
        className="text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark"
      >
        Sumanth
      </Link>
    </footer>
  );
}
