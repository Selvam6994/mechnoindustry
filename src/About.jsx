import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import client1 from "../src/assets/Images/company icons/BONFIGLIOLI.jpg";
import client2 from "../src/assets/Images/company icons/ELFORGE.jpg";
import client3 from "../src/assets/Images/company icons/hyundai transys.png";

function About() {
  const clientImages = [
    {
      clientImage: client1,
      tansitionDuration: 1.5,
    },
    {
      clientImage: client2,
      tansitionDuration: 2,
    },
    {
      clientImage: client3,
      tansitionDuration: 2.5,
    },
  ];
  const aboutPageWidth = useMediaQuery("(min-width:595px)");
  const [springAction, setSpringAction] = useState(false);
  const [iconsSpringAction, setIconSpringAction] = useState(false);
  const scrollForIcons = () => {
    if (window.scrollY >= 100) {
      setIconSpringAction(true);
    } else if (window.scrollY >= 500) {
      setIconSpringAction(true);
    } else {
      setIconSpringAction(false);
    }
  };

  const scrollForVisionCard = () => {
    if (window.scrollY >= 500) {
      setSpringAction(true);
    } else {
      setSpringAction(false);
    }
  };
  window.addEventListener("scroll", scrollForVisionCard);
  window.addEventListener("scroll", scrollForIcons);
  return (
    <div className="aboutUsMain">
      <div className="aboutPage">
        <motion.div
          className="aboutUsCard"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="aboutUs">
            <h1>About Us</h1>
            <span>
              Mechno Dream Industry is a Young, Efficient and Passionate
              workstation{" "}
            </span>
            <span>
              {" "}
              where all your industrial dreams would be brought into reality.{" "}
            </span>

            <span>
              {" "}
              The organization is established with the moto of converting the
              core mechanical industry into an Automation driven industry{" "}
            </span>

            <span>
              to ease your efforts thereby providing a tremendous boost to your
              efficiency and profit.
            </span>
          </div>
        </motion.div>
      </div>
      {iconsSpringAction == true ? (
        <motion.div
          className="IconCard"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
        >
          <div className="clientSection">
            <h1>Major Clients</h1>
            <div className="clientIconsSection">
              {clientImages.map((images) => (
                <motion.div
                  // className="visionCard"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    duration: images.tansitionDuration,
                  }}
                >
                  <Card
                    sx={
                      aboutPageWidth == true
                        ? { width: "150px", height: "150px",margin:"20px 0" }
                        : { width: "100px", height: "100px",margin:"20px 0" }
                    }
                    className="clientIcons"
                  >
                    <img
                      style={
                        aboutPageWidth == true
                          ? { width: "150px", height: "150px" }
                          : { width: "100px", height: "100px" }
                      }
                      src={images.clientImage}
                      alt="Client Images"
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
      {aboutPageWidth == true ? (
        <div
          style={{ margin: "1000px 0 0 0", height: "300px" }}
          className="visionPage"
        >
          {springAction == true ? (
            <motion.div
              className="visionCard"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1.5 }}
            >
              <div className="vision">
                <h1>Vision & Mission</h1>
                <h3>Vision</h3>
                <span>
                  To transform our customer organizations by offering the
                  best-in-class services
                </span>
                <span>
                  thereby to lead as the best innovative player of Industrial
                  Automation Services Provider.
                </span>
                <h3>Mission</h3>
                <span>To remain a socially responsible entity,</span>

                <span>which would constantly deliver premium quality,</span>
                <span>
                  innovative industrial solutions and a gratified customer
                  experience.
                </span>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div
          style={{ margin: "1050px 0 0 0", height: "400px" }}
          className="visionPage"
        >
          {springAction == true ? (
            <motion.div
              style={{ height: "400px" }}
              className="visionCard"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring" }}
            >
              <div className="vision">
                <h1>Vision & Mission</h1>
                <h3>Vision</h3>
                <span>
                  To transform our customer organizations by offering the
                  best-in-class services
                </span>
                <span>
                  thereby to lead as the best innovative player of Industrial
                  Automation Services Provider.
                </span>
                <h3>Mission</h3>
                <span>To remain a socially responsible entity,</span>

                <span>which would constantly deliver premium quality,</span>
                <span>
                  innovative industrial solutions and a gratified customer
                  experience.
                </span>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default About;
