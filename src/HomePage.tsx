import {
  faHandshake,
  faMessage,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navdiv from "./components/Navdiv";
import "./homePage.css";
import backImg from "./assets/homeBack.png";

export default function HomePage() {
  return (
    <div className="Home-div" style={{ backgroundImage: `url(${backImg})` }}>
      <Navdiv />
      <div className="Home_Text-div">
        <h1>A Classical Education for the Future</h1>
        <p>
          We prepare you to engage in the world that is and to help bring about
          a world that ought to be
        </p>
        <button type="submit">Get Started</button>
        <div className="home-divList">
          <div className="H-divList">
            <FontAwesomeIcon
              icon={faMessage}
              font-size="24px"
              style={{ color: "#FFD43B" }}
            />
            <h3>Live chat</h3>
          </div>
          <div className="H-divList">
            <FontAwesomeIcon
              icon={faHandshake}
              font-size="24px"
              style={{ color: "#FFD43B" }}
            />
            <h3>Examination</h3>
          </div>
          <div className="H-divList">
            <FontAwesomeIcon
              icon={faViruses}
              font-size="24px"
              style={{ color: "#FFD43B" }}
            />
            <h3>Competition</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
