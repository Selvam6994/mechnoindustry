import React from "react";
import plugGauges from "./assets/Images/Precision Gauges/go-no-go-Thread Plug Gauges.png";
import ringGauges from "./assets/Images/Precision Gauges/go-no-go-Thread-Ring-Gauge.jpg";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useMediaQuery } from "@mui/material";

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

function Gauges() {
    const gauges = [
      {
        image: plugGauges,
        title: "Thread Plug Gauges",
      },
      {
        image: ringGauges,
        title: "Thread Ring Gauges",
      },
     
    ];
    const screenWidth = useMediaQuery("(min-width:550px)");
    return (
      <div className="automationPage">
        <Section>
          <h1 style={{ color: "white" }}>Precision Gauges</h1>
        </Section>
        <div className="conveyorCard">
          {gauges.map((projects) => (
            <Section>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={projects.image}
                    alt={projects.image}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={screenWidth==true?{
                      height: "80px",
                      width: "500px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }:{
                      height: "200px",
                      width: "280px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {projects.title}
                  </Typography>
                </CardActionArea>
              </Card>
            </Section>
          ))}
        </div>
      </div>
    );
  }
export default Gauges;
