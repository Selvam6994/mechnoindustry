import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Quotation() {
  const [form, setForm] = useState(false);
  const [formMessage, setFormMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const appWidth = useMediaQuery("(min-width:1105px)");

  const navigate = useNavigate();

  const formik_email = useFormik({
    initialValues: {
      companyname: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      file: "",
      otheroption: "",
      check: [],
    },
    //https://mechno-industry-api.onrender.com
    validationSchema: yup.object({
      companyname: yup.string().required("*"),
      name: yup.string().required("*"),
      email: yup.string().required("*"),
      phone: yup.number().required("*"),
      message: yup.string().required("*"),
    }),

    onSubmit: async (values) => {
      if (formik_email.values.file != "") {
        const data = new FormData();
        data.append("file", values.file);
        const uploadFile = await fetch(
          `https://mechno-site-api.onrender.com/upload`,
          {
            method: "POST",
            headers: new Headers({ Accept: "application/json" }),
            body: data,
          }
        );
        if (uploadFile.status == 200) {
          const result = await uploadFile.json();

          console.log("success");
        } else {
          console.log("failed");
        }
        const sendData = await fetch(
          `https://mechno-site-api.onrender.com/attachmentemail`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(values),
          }
        );
        if (sendData.status == 200) {
          const result = await sendData.json();
          setFormMessage(true);
          setLoading(false);
          console.log("success");
        } else {
          console.log("failed");
        }
      } else {
        const sendData = await fetch(
          `https://mechno-site-api.onrender.com/onlymail`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(values),
          }
        );
        if (sendData.status == 200) {
          const result = await sendData.json();
          setFormMessage(true);
          console.log("success");
        } else {
          console.log("failed");
        }
      }
    },
  });
  {
    console.log(formik_email.values.check);
  }

  return (
    <div className="quotationPage">
      <form className="emailUsForm" onSubmit={formik_email.handleSubmit}>
        {formMessage == false ? (
          <Box className="emailUsForm">
            <div
              className="checkBox"
              style={
                appWidth != true ? { height: "200px" } : { height: "200px" }
              }
            >
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Paper
                  className="checkBoxPaper"
                  sx={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                >
                  <FormControlLabel
                    value="Machining"
                    control={<Checkbox />}
                    label="Machining"
                    labelPlacement="Machining"
                    name="check"
                    onChange={formik_email.handleChange}
                  />
                  <FormControlLabel
                    value="Fabrication"
                    control={<Checkbox />}
                    label="Fabrication"
                    labelPlacement="Fabrication"
                    name="check"
                    onChange={formik_email.handleChange}
                  />

                  <FormControlLabel
                    value="Plastics Manufacturing"
                    control={<Checkbox />}
                    label="Plastics Manufacturing"
                    labelPlacement="Plastics Manufacturing"
                    name="check"
                    onChange={formik_email.handleChange}
                  />
                  <FormControlLabel
                    value="Electronics Manufacturing"
                    control={<Checkbox />}
                    label="Electronics Manufacturing"
                    labelPlacement="Electronics Manufacturing"
                    name="check"
                    onChange={formik_email.handleChange}
                  />
                  <FormControlLabel
                    value="Automation"
                    control={<Checkbox />}
                    label="Automation"
                    labelPlacement="Automation"
                    name="check"
                    onChange={formik_email.handleChange}
                  />

                  <div className="others">
                    <TextField
                      label="Others"
                      type="text"
                      variant="standard"
                      placeholder="Other options"
                      id="standard-size-normal"
                      size="small"
                      name="otheroption"
                      focused
                      onChange={formik_email.handleChange}
                    />
                  </div>
                </Paper>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 2.5 }}
            >
              <Paper
                sx={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                className="emailUsFormPaper"
              >
                <div>
                  <TextField
                    label={
                      formik_email.touched.companyname &&
                      formik_email.errors.companyname ? (
                        <span
                          style={{ color: "red" }}
                        >{`Compnay Name${formik_email.errors.companyname}`}</span>
                      ) : (
                        "Compnay Name"
                      )
                    }
                    type="text"
                    variant="standard"
                    placeholder="Name of your Company"
                    id="standard-size-normal"
                    size="small"
                    name="companyname"
                    focused
                    onChange={formik_email.handleChange}
                    onBlur={formik_email.handleBlur}
                  />
                </div>
              </Paper>
            </motion.div>

            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 2.5 }}
            >
              <Paper
                sx={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                className="emailUsFormPaper"
              >
                <TextField
                  label={
                    formik_email.touched.name && formik_email.errors.name ? (
                      <span
                        style={{ color: "red" }}
                      >{`Name${formik_email.errors.name}`}</span>
                    ) : (
                      "Name"
                    )
                  }
                  type="text"
                  variant="standard"
                  placeholder="Your name"
                  id="standard-size-normal"
                  focused
                  size="small"
                  name="name"
                  onChange={formik_email.handleChange}
                  onBlur={formik_email.handleBlur}
                />
              </Paper>
            </motion.div>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 2.5 }}
            >
              <Paper
                sx={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                className="emailUsFormPaper"
              >
                <TextField
                  label={
                    formik_email.touched.email && formik_email.errors.email ? (
                      <span
                        style={{ color: "red" }}
                      >{`Email${formik_email.errors.email}`}</span>
                    ) : (
                      "Email"
                    )
                  }
                  type="email"
                  variant="standard"
                  placeholder="Your email address"
                  id="standard-size-normal"
                  focused
                  size="small"
                  name="email"
                  onChange={formik_email.handleChange}
                  onBlur={formik_email.handleBlur}
                />
              </Paper>
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 2.5 }}
            >
              <Paper
                sx={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                className="emailUsFormPaper"
              >
                <TextField
                  label={
                    formik_email.touched.phone && formik_email.errors.phone ? (
                      <span
                        style={{ color: "red" }}
                      >{`Phone ${formik_email.errors.phone}`}</span>
                    ) : (
                      "Phone Number"
                    )
                  }
                  type="text"
                  variant="standard"
                  placeholder="Your contact number"
                  id="standard-size-normal"
                  focused
                  size="small"
                  name="phone"
                  onChange={formik_email.handleChange}
                  onBlur={formik_email.handleBlur}
                />
              </Paper>
            </motion.div>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 2.5 }}
            >
              <Paper
                sx={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                className="emailUsFormPaper"
              >
                <TextField
                  variant="standard"
                  id="standard-size-normal"
                  focused
                  label={
                    formik_email.touched.message &&
                    formik_email.errors.message ? (
                      <span
                        style={{ color: "red" }}
                      >{`Message${formik_email.errors.message}`}</span>
                    ) : (
                      "Message"
                    )
                  }
                  placeholder="Type your message here."
                  multiline
                  name="message"
                  onChange={formik_email.handleChange}
                  onBlur={formik_email.handleBlur}
                />
              </Paper>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Paper
                sx={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  padding: "10px",
                }}
              >
                <TextField
                  sx={{ input: { color: "black" } }}
                  type="file"
                  color="success"
                  id="outlined-size-small"
                  name="file"
                  onChange={(e) => {
                    formik_email.setFieldValue("file", e.target.files[0]);
                  }}
                />
                <p>Do You have more than one pdf/image files to attach? </p>
                <p>kindly, combine as a sigle file before uploading. </p>
              </Paper>
            </motion.div>

            <Button
              type="submit"
              variant="contained"
              
              onClick={() => {
                formik_email.values.companyname &&
                formik_email.values.name &&
                formik_email.values.email &&
                formik_email.values.phone &&
                formik_email.values.message != ""
                  ? setLoading(true)
                  : setLoading(false);
             }}
             disabled = {loading!=true?false:true}
            >
              {loading != true ? "Send" : "Please Wait..."}
            </Button>
          </Box>
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
                damping: 10,
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
                  height: "300px",
                  marginTop: "300px",
                },
              }}
            >
              <Paper
                className="emailStatus"
                elevation={3}
                style={{
                  color: "rgb(61, 61, 61)",
                  backgroundColor: "rgba(1, 114, 249,0.7)",
                }}
              >
                <h3>
                  We received your mail, our team will get back to you soon.
                </h3>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    navigate("/");
                    setFormMessage(false);
                    setForm(false);
                  }}
                >
                  Back
                </Button>
              </Paper>
            </Box>
          </motion.div>
        )}
      </form>
    </div>
  );
}

export default Quotation;
