import React from "react";
import beltConveyors from "./assets/Images/Automation/Conveyors/Belt conveyor.jpg";
import inclinedConveyors from "./assets/Images/Automation/Conveyors/Inclined belt conveyor.jpg";
import chainConveyor from "./assets/Images/Automation/Conveyors/Chain Conveyor.jpg";
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
function Automation() {
  const automation = [
    {
      image: beltConveyors,
      title: "Belt Conveyors",
    },
    {
      image: inclinedConveyors,
      title: "Inclined Belt Conveyors",
    },
    {
      image: chainConveyor,
      title: "Chain Conveyors",
    },
  ];
  const screenWidth = useMediaQuery("(min-width:550px)");
  return (
    <div className="automationPage">
      <Section>
        <h1 style={{ color: "white" }}>Conveyors</h1>
      </Section>
      <div className="conveyorCard">
        {automation.map((projects) => (
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

export default Automation;
