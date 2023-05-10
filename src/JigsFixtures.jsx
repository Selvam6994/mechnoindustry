import React from "react";
import cncFixture from "./assets/Images/Industrial services/Jigs and fixtures/CNC Fixture.jpg";
import hydraulicFixture from "./assets/Images/Industrial services/Jigs and fixtures/hydraulic fixture.jpg";
import vmcFixture from "./assets/Images/Industrial services/Jigs and fixtures/VMC Fixture.jpg";
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
function JigsFixtures() {
    const automation = [
        {
          image: cncFixture,
          title: "CNC Fixture",
        },
        {
          image: hydraulicFixture,
          title: "Hydraulic Fixture",
        },
        {
          image: vmcFixture,
          title: "VMC Fixture",
        },
      ];
      const screenWidth = useMediaQuery("(min-width:550px)");
      return (
        <div className="automationPage">
          <Section>
            <h1 style={{ color: "white" }}>Jigs And Fixtures</h1>
          </Section>
          <div className="conveyorCard">
            {automation.map((projects) => (
              <Section>
                <Card sx={{ maxWidth: 500,minWidth: 280 }}>
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
                        height: "100px",
                        width: "180px",
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

export default JigsFixtures