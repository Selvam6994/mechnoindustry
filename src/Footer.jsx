import { useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../src/assets/Images/Logo.webp";
import IconButton from "@mui/material/IconButton";
import insta from "../src/assets/Images/Social Icons/instagram.png";
import faceBook from "../src/assets/Images/Social Icons/facebook.png";
import linkedin from "../src/assets/Images/Social Icons/linkedin.png";

function Footer() {
  const socialMedia = [
    {
      name: "Instagram",
      icon: insta,
      link: "https://www.instagram.com/mechno_dream_industry/?igshid=ZDdkNTZiNTM%3D&__coig_restricted=1",
    },
    {
      name: "Facebook",
      icon: faceBook,
      link: "",
    },
    {
      name: "Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/mechno-dream-industry-777369191/",
    },
  ];
  const footerMatches = useMediaQuery("(min-width:870px)");

  return (
    <div>
      {footerMatches == true ? (
        <div className="footerSectionBefore">
          <div className="contactDetails" style={{ color: "white" }}>
            <img className="logo" src={logo}></img>
            <h3>Mechno Dream Industry</h3>
            <span>T-343,Sidco Women Industrial Estate,</span>
            <span>Thirumullaivoyal,</span>
            <span>Pappakuruchi Kattur,</span>
            <span>Tamil Nadu 600062</span>
            <div className="socialMediaSection">
              {socialMedia.map((media) => (
                <a href={media.link} target={"_blank"}>
                  <img
                    style={{
                      width: "50px",
                      margin: "20px 0 0 0",
                    }}
                    src={media.icon}
                    alt={media.name}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="emailUsForm"></div>
        </div>
      ) : (
        <div className="footerSectionAfter"></div>
      )}
    </div>
  );
}

export default Footer;
