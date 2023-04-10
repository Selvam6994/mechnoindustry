import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { color, motion } from "framer-motion";
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
  const [form, setForm] = useState(false);
  const [formMessage, setFormMessage] = useState(false);

  let userSchema = yup.object({
    name: yup.string().required("*"),
    email: yup.string().required("*"),
    phone: yup.number().required("*"),
    subject: yup.string().required("*"),
    message: yup.string().required("*"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    //https://mechno-backend.onrender.com
    validationSchema: userSchema,
    onSubmit: async (values) => {
      const sendData = await fetch("https://mechno-backend.onrender.com", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values),
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
          <form className="emailUsForm" onSubmit={formik.handleSubmit}>
            <TextField
              sx={{ input: { color: "white" } }}
              label={
                formik.touched.name && formik.errors.name ? (
                  <span
                    style={{ color: "red" }}
                  >{`Name${formik.errors.name}`}</span>
                ) : (
                  "Name"
                )
              }
              type="text"
              color="success"
              id="outlined-size-small"
              size="small"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextField
              sx={{ input: { color: "white" } }}
              label={
                formik.touched.email && formik.errors.email ? (
                  <span
                    style={{ color: "red" }}
                  >{`Email${formik.errors.email}`}</span>
                ) : (
                  "Email"
                )
              }
              type="email"
              color="success"
              id="outlined-size-small"
              size="small"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextField
              sx={{ input: { color: "white" } }}
              label={
                formik.touched.phone && formik.errors.phone ? (
                  <span
                    style={{ color: "red" }}
                  >{`Phone ${formik.errors.phone}`}</span>
                ) : (
                  "Phone Number"
                )
              }
              type="text"
              color="success"
              id="outlined-size-small"
              size="small"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextField
              id="outlined-textarea"
              label={
                formik.touched.subject && formik.errors.subject ? (
                  <span
                    style={{ color: "red" }}
                  >{`Subject${formik.errors.subject}`}</span>
                ) : (
                  "Subject"
                )
              }
              color="success"
              placeholder="Subject"
              multiline
              name="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextField
              id="outlined-textarea"
              label={
                formik.touched.message && formik.errors.message ? (
                  <span
                    style={{ color: "red" }}
                  >{`Message${formik.errors.message}`}</span>
                ) : (
                  "Message"
                )
              }
              color="success"
              placeholder="Type your message here."
              multiline
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </div>
      ) : (
        <div className="footerSectionAfter">
          {form == true ? (
            <motion.div
              className="emailButtonForm"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    minWidth: 280,
                    height: "fitContent",
                  },
                }}
              >
                <Paper className="form" elevation={3}>
                  {formMessage == false ? (
                    <form
                      className="mobileEmailForm"
                      onSubmit={formik.handleSubmit}
                    >
                      <TextField
                      
                        label={
                          formik.touched.name && formik.errors.name ? (
                            <span
                              style={{ color: "red" }}
                            >{`Name${formik.errors.name}`}</span>
                          ) : (
                            "Name"
                          )
                        }
                        type="text"
                        color="success"
                        id="outlined-size-small"
                        size="small"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />

                      <TextField
                       
                        label={
                          formik.touched.email && formik.errors.email ? (
                            <span
                              style={{ color: "red" }}
                            >{`Email${formik.errors.email}`}</span>
                          ) : (
                            "Email"
                          )
                        }
                        type="email"
                        color="success"
                        id="outlined-size-small"
                        size="small"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />

                      <TextField
                       
                        label={
                          formik.touched.phone && formik.errors.phone ? (
                            <span
                              style={{ color: "red" }}
                            >{`Phone ${formik.errors.phone}`}</span>
                          ) : (
                            "Phone Number"
                          )
                        }
                        type="text"
                        color="success"
                        id="outlined-size-small"
                        size="small"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />

                      <TextField
                        id="outlined-textarea"
                        label={
                          formik.touched.subject && formik.errors.subject ? (
                            <span
                              style={{ color: "red" }}
                            >{`Subject${formik.errors.subject}`}</span>
                          ) : (
                            "Subject"
                          )
                        }
                        color="success"
                        placeholder="Subject"
                        multiline
                        name="subject"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />

                      <TextField
                        id="outlined-textarea"
                        label={
                          formik.touched.message && formik.errors.message ? (
                            <span
                              style={{ color: "red" }}
                            >{`Message${formik.errors.message}`}</span>
                          ) : (
                            "Message"
                          )
                        }
                        color="success"
                        placeholder="Type your message here."
                        multiline
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <Button type="submit" variant="contained">
                        Send
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setForm(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      className="emailButtonForm"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                          type: "spring",
                          damping: 6,
                          stiffness: 100,
                          restDelta: 0.001,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          "& > :not(style)": {
                            m: 1,
                            minWidth: 280,
                            height: "fitContent",
                          },
                        }}
                      >
                        <Paper
                          className="emailStatus"
                          elevation={3}
                          style={{
                            color: "rgb(61, 61, 61)",
                            backgroundColor: "rgb(1, 114, 249)",
                          }}
                        >
                          <h3>
                            We received your mail, our team will get back to you
                            soon.
                          </h3>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                              setFormMessage(false);
                              setForm(false);
                            }}
                          >
                            Close
                          </Button>
                        </Paper>
                      </Box>
                    </motion.div>
                  )}
                </Paper>
              </Box>
            </motion.div>
          ) : (
            ""
          )}
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
            {form != true ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  setForm(true);
                }}
              >
                Let's get connected
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
