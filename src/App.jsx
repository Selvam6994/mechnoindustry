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
import Quotation from "./Quotation";
import Projects from "./Projects";
import Automation from "./Automation";
import Fabrication from "./Fabrication";

function App() {
  const appWidth = useMediaQuery("(min-width:1105px)");
  const navWidth = useMediaQuery("(min-width:475px)");
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
      optionName: "Projects",
      linkTo: "/projects",
    },
    {
      optionName: "Gallery",
      linkTo: "/gallery",
    },
    {
      optionName: "Get Quote",
      linkTo: "/quotation",
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
        <Route path="/footer" element={<Footer />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/fabrications" element={<Fabrication />} />
        <Route path="/quotation" element={<Quotation />} />

      </Routes>
      {appWidth == true ? (
        <div className={navbar == false ? "navBar" : "navBarActive"}>
          <div className="titleSection">
            <img style={{ width: "100px" }} src={logo}></img>
            <div style={{ fontSize: "30px" }}>Mechno Dream Industry</div>
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
            {navWidth == true ? (
              <span>Mechno Dream Industry</span>
            ) : (
              <h6>Mechno Dream Industry</h6>
            )}
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
