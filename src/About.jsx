import React, { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [springAction, setSpringAction] = useState(false);
  const scrollDown = () => {
    if (window.scrollY >= 100) {
      setSpringAction(true);
    } else {
      setSpringAction(false);
    }
  };
  window.addEventListener("scroll", scrollDown);
  return (
    <div>
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
      <div className="clientSection">
      <h1>Major Clients</h1>
      <div className="clientIcons">
        
      </div>
      </div>
      <div className="visionPage">
        {springAction == true ? (
          <motion.div
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
    </div>
  );
}

export default About;
