import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../src/assets/Images/Logo.webp";
import insta from "../src/assets/Images/Social Icons/instagram.png";
import faceBook from "../src/assets/Images/Social Icons/facebook.png";
import linkedin from "../src/assets/Images/Social Icons/linkedin.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

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
  const [formMessage, setFormMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      file: "",
    },
    //https://mechnodream-backend.onrender.com
    validationSchema: yup.object({
      name: yup.string().required("*"),
      email: yup.string().required("*"),
      phone: yup.number().required("*"),
      subject: yup.string().required("*"),
      message: yup.string().required("*"),
      // file: yup
      //   .mixed()
      //   .test(
      //     "FILE_SIZE",
      //     "Too Big",
      //     (value) => value && value.size < 1024 * 1024
      //   ),
    }),
    onSubmit: async (values) => {
      const sendData = await fetch("http://localhost:4000/sendemail", {
        method: "POST",
        headers: new Headers({ Accept: "application/json" }),
        body: JSON.stringify(values),
        //
      });
      if (sendData.status == 200) {
        const result = await sendData.json();
        setFormMessage(true);
        console.log("success");
      } else {
        console.log("failed");
      }
    },
  });

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
           <Link to="/quotation"> <Button  variant="contained"
                color="success">Get Quote</Button></Link>
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
        </div>
      ) : (
        <div className="footerSectionAfter">
        
          <div className="contactDetailsAfter" style={{ color: "white" }}>
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
               <Link to="/quotation"> <Button  variant="contained"
               color="success">Get Quote</Button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
