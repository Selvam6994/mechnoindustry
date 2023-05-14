import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Typography from "@mui/material/Typography";
import { CardActionArea, useMediaQuery } from "@mui/material";

import beltConveyor from "./assets/Images/Automation/Conveyors/Belt conveyor.jpg";
import inclinedBeltConveyor from "./assets/Images/Automation/Conveyors/Inclined belt conveyor.jpg";
import chainConveyor from "./assets/Images/Automation/Conveyors/Chain Conveyor.jpg";

import robo from "./assets/Images/Automation/Robot Programming.jpg";

import panelWiring from "./assets/Images/Automation/Panel Wiring.jpg";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const automation = [
  {
    name: "Robotics",
    type: [
      {
        image: robo,
        title: "Robot Programming",
      },
    ],
  },
  {
    name: "Panel Wiring",
    type: [
      {
        image: panelWiring,
        title: "Panel Desiging and Wiring",
      },
    ],
  },
  {
    name: "Conveyors",
    type: [
      {
        image: beltConveyor,
        title: "Flat Belt Conveyors",
      },
      {
        image: inclinedBeltConveyor,
        title: "Inclined Belt Conveyors",
      },
      {
        image: chainConveyor,
        title: "Chain Conveyors",
      },
    ],
  },
];


function Automation() {
  const [width, setWidth] = useState(0);
  const fabPageWidth = useMediaQuery("(min-width:869px)");
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const carousel = useRef();
  
  return (
    <div className="fabricationPage">
      {automation.map((ele) => (
        <>
          <Section>
            <h2 style={{ color: "white",margin:"50px" }}>{ele.name}</h2>
          </Section>

          <div className="projectCard">
            <motion.div
              ref={carousel}
              className="projectClientCarousel"
              whileTap={{ cursor: "grabbing" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <motion.div
                className="projectInnerCarousel"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {ele.type.map((job) => {
                  return (
                    <motion.div
                      className="favItem"
                      whileTap={{ cursor: "grabbing" }}
                    >
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            className="cardMedia"
                            component="img"
                            height="150"
                            width="450"
                            image={job.image}
                            alt={job.title}
                          />
                          <CardContent
                            style={
                              fabPageWidth != true
                                ? { height: "150px", width: "400px" }
                                : {
                                    height: "100px",
                                    width: "400px",
                                    display: "flex",
                                    flexWrap: "wrap",
                                  }
                            }
                          >
                            <Typography variant="h6" component="div">
                              {job.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Automation;
