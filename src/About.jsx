import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import client1 from "../src/assets/Images/company icons/BONFIGLIOLI.jpg";
import client2 from "../src/assets/Images/company icons/ELFORGE.jpg";
import client3 from "../src/assets/Images/company icons/hyundai transys.png";
import client4 from "../src/assets/Images/company icons/Essae.jpg";
import client5 from "../src/assets/Images/company icons/Fives.jpg";
import client6 from "../src/assets/Images/company icons/Kia.jpg";
import client7 from "../src/assets/Images/company icons/Malles.jpg";
import client8 from "../src/assets/Images/company icons/Neel Metal.jpg";
import client9 from "../src/assets/Images/company icons/Novares.jpg";
import client10 from "../src/assets/Images/company icons/Tafe.jpg";
import client11 from "../src/assets/Images/company icons/TBI.jpg";
import client12 from "../src/assets/Images/company icons/JBM.jpg";
import client13 from "../src/assets/Images/company icons/Wia.jpg";
import client14 from "../src/assets/Images/company icons/NewTech.jpg";

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
    {
      clientImage: client4,
      tansitionDuration: 3,
    },
    {
      clientImage: client5,
      tansitionDuration: 3.5,
    },
    {
      clientImage: client6,
      tansitionDuration: 4,
    },
    {
      clientImage: client7,
      tansitionDuration: 4.5,
    },
    {
      clientImage: client8,
      tansitionDuration: 5,
    },
    {
      clientImage: client9,
      tansitionDuration: 5.5,
    },
    {
      clientImage: client10,
      tansitionDuration: 6,
    },
    {
      clientImage: client11,
      tansitionDuration: 6.5,
    },
    {
      clientImage: client12,
      tansitionDuration: 7,
    },
    {
      clientImage: client13,
      tansitionDuration: 7.5,
    },
    {
      clientImage: client14,
      tansitionDuration: 8,
    },
  ];
  const pageWidth1 = useMediaQuery("(min-width:980px)");
   const pageWidth2 = useMediaQuery("(min-width:500px)");
  const [springAction, setSpringAction] = useState(false);
  const [iconsSpringAction, setIconSpringAction] = useState(false);
  const scrollForIcons = () => {
    if (window.scrollY >= 200) {
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
      <div className={pageWidth1==false?"aboutSectionAfter":"aboutSectionBefore"}>
        <motion.div
          className="aboutUsCardBefore"
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
          className={pageWidth1==false? "IconCardat980px":"IconCardBefore"}
          initial={pageWidth1==false?{ y: 500 }:{ y: 100 }}
          animate={pageWidth1==false?{ y: 300 }:{ y: 0 }}
          transition={{
            type: "spring",
            duration: 2,
          }}
        >
          <div className="clientSection">
            <h1>Major Clients</h1>
            <div className="clientIconsSection">
              {clientImages.map((images) => (
                <motion.div
                  className="visionCard"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    duration: images.tansitionDuration,
                  }}
                >
                  <Card
                    sx={pageWidth1==true?{ width: "150px", height: "150px", margin: "20px 0" }:{ width: "80px", height: "80px", margin: "5px 0" }}
                    className="clientIcons"
                  >
                    <img
                      style={pageWidth1==true?{ width: "150px", height: "150px" }:{ width: "80px", height: "80px", margin: "5px 0" }}
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

      <div className={pageWidth1==false?"visionPageAfter":"visionPageBefore"}>
        {springAction == true ? (
          <motion.div
            className="visionCardBefore"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 2.5 }}
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
    </div>
  );
}

export default About;
