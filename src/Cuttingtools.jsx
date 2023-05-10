import React from "react";
import drillBits from "./assets/Images/Cutting tools/Drill Bits.jpg";
import endMills from "./assets/Images/Cutting tools/End Mills.jpg";
import inserts from "./assets/Images/Cutting tools/Inserts.jpg";
import specialTools from "./assets/Images/Cutting tools/Special Tools.jpg";
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

function Cuttingtools() {
  const automation = [
    {
      image: drillBits,
      title: "Drill Bits",
    },
    {
      image:  endMills,
      title: "End Mills",
    },
    {
      image:   inserts,
      title: "Inserts",
    },
    {
        image:specialTools,
        title:"Special Tools"
    }
  ];
  const toolsPageWidth = useMediaQuery("(min-width:1328px)");
  return (
    <div className="toolsPage">
      <Section>
        <h2 style={{ color: "white" }}>Jigs And Fixtures</h2>
      </Section>
      <div className="toolsCard">
        {automation.map((projects) => (
          <Section>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={projects.image}
                  alt={projects.image}
                  style={
                    toolsPageWidth == true
                      ? {
                          height: "200px",
                          width: "380px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                         
                        }
                      : {
                          height: "180px",
                          width: "280px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                  }
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={
                    toolsPageWidth == true
                      ? {
                          height: "80px",
                          width: "380px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                         
                        }
                      : {
                          height: "50px",
                          width: "280px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                  }
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

export default Cuttingtools;
