import Logo from "../assets/Fountain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import "./navdiv.css";
import { useState } from "react";

export default function () {
  const [isclicked, setClicked] = useState(false);

  const changesClick = () => {
    setClicked(!isclicked);
  };

  return (
    <div className="Navbar-div">
      <FontAwesomeIcon
        className="menuclick"
        icon={isclicked ? faX : faBars}
        size={"lg"}
        style={{ color: "#ff7300" }}
        onClick={changesClick}
      />
      <img src={Logo} alt="logo" />
      <ul className={isclicked ? "Navunlist" : "Navunlist nav_hide "}>
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
        />
        <button className="Nav_btn1" type="submit">
          Register
        </button>
      </div>
      <div className="nav_icon_ring">
        <FontAwesomeIcon
          icon={faUser}
          size={"lg"}
          style={{ color: "#ff7300" }}
        />
      </div>
    </div>
  );
}
