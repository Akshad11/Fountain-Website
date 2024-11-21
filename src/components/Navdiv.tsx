import Logo from "../assets/Fountain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./navdiv.css";

export default function () {
  return (
    <div className="Navbar-div">
      <img src={Logo} alt="logo" />
      <ul className="Navunlist">
        <li>Home</li>
        <li>Courses</li>
        <li>Instuctors</li>
        <li>Schedules</li>
        <li>Contact Us</li>
      </ul>

      <div className="Iconbtn-div">
        <FontAwesomeIcon
          className="nav-Icon"
          icon={faMagnifyingGlass}
          font-size="20px"
          style={{ color: "#ffffff" }}
        />
        <button type="submit">Register</button>
      </div>
    </div>
  );
}
