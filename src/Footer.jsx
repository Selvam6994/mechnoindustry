import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import logo from "../src/assets/Images/Logo.webp";
import insta from "../src/assets/Images/Social Icons/instagram.png";
import faceBook from "../src/assets/Images/Social Icons/facebook.png";
import linkedin from "../src/assets/Images/Social Icons/linkedin.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
const [form,setForm] = useState(false)
  return (
    <div className="footer">
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

          <form className="emailUsForm">
            <TextField
              label="Name"
              type="text"
              color="primary"
              id="outlined-size-small"
              size="small"
              focused
            />
            <TextField
              label="Email"
              type="email"
              color="primary"
              id="outlined-size-small"
              size="small"
              focused
            />
            <TextField
              label="Phone Number"
              type="number"
              color="primary"
              id="outlined-size-small"
              size="small"
              focused
            />
            <TextField
              id="outlined-textarea"
              label="Message"
              color="primary"
              placeholder="Type your message here."
              multiline
              focused
            />
            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </div>
      ) : (
        <div className="footerSectionAfter">
          <div className="contactDetails" style={{ color: "white" }}>
            <img className="logo" src={logo}></img>
            <h3>Mechno Dream Industry</h3>
            <span>T-343,Sidco Women</span>
            <span>Industrial Estate,</span>
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
          <div className="emailButton">
            <Button variant="outlined" onClick={()=>(setForm(true))}>Let's get connected</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
