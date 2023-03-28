import "./App.css";
import Home from "./Home";
import { React, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "react-bootstrap/Dropdown";
import Footer from "./Footer";
import bgImage from "../src/assets/Images/bgimage1.jpg";
import About from "./About";
import { Route, Routes, Link } from "react-router-dom";
import logo from "../src/assets/Images/Logo.webp";
import Gallery from "./Gallery";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
// import Divider from "@mui/material/Divider";

function App() {
  const appWidth = useMediaQuery("(min-width:1105px)");
  const [navbar, setNavbar] = useState(false);
  const options = [
    {
      optionName: "Home",
      linkTo: "/",
    },
    {
      optionName: "About",
      linkTo: "/about",
    },
    {
      optionName: "Automation",
      linkTo: "/automation",
    },
    {
      optionName: "Services",
      linkTo: "/indutrial",
    },
    {
      optionName: "Gallery",
      linkTo: "/gallery",
    },
    {
      optionName: "Contact",
      linkTo: "/contact",
    },
  ];

  const scrollDown = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", scrollDown);
  return (
    <div className="App">
      <div className="backGroundBefore">
        <img className="backGroundBefore" src={bgImage} alt="Image" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {appWidth == true ? (
        <div className={navbar == false ? "navBar" : "navBarActive"}>
          <div className="titleSection">
            <img style={{ width: "100px" }} src={logo}></img>
            <div>Mechno Dream Industry</div>
          </div>
          <div className="navOptions">
            <ul>
              {options.map((options) => (
                <Link to={options.linkTo}>
                  <li className="options">{options.optionName}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={navbar == false ? "navBar" : "navBarActive"}>
          <div className="titleSection">
            <img style={{ width: "100px" }} src={logo}></img>
            <span>Mechno Dream Industry</span>
          </div>
          <div className="menuButton">
            <Dropdown>
              <IconButton aria-label="menuIcon">
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <MenuIcon style={{ color: "white" }} fontSize="large" />
                </Dropdown.Toggle>
              </IconButton>

              <Dropdown.Menu>
                {options.map((options) => (
                  <div className="dropDownOptions">
                    <Dropdown.Item key={options.optionName}>
                      <Link to={options.linkTo}> {options.optionName}</Link>
                    </Dropdown.Item>
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
