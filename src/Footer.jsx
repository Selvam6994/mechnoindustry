import { useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../src/assets/Images/Logo.webp";

function Footer() {
  const footerMatches = useMediaQuery("(min-width:870px)");

  return (
    <>
      {footerMatches == true ? (
        <div className="footerSectionBefore">
          <div className="contactDetails">
            <img className="logo" src={logo}></img>
            <h3>Mechno Dream Industry</h3>
          </div>
          <div className="emailUsForm"></div>
        </div>
      ) : (
        <div className="footerSectionAfter"></div>
      )}
    </>
  );
}

export default Footer;
