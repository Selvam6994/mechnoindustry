import React from "react";
import { motion } from "framer-motion";
import fabrication from "./assets/Images/Industrial services/Fabrications/Fabrications.jpg";
import jigsFixtures from "./assets/Images/Industrial services/Jigs and fixtures/Jigs and fixtures.webp";
import automation from "./assets/Images/Automation/Automation.webp";
import gauges from "./assets/Images/Precision Gauges/Gauges card image.jpg";
import tools from "./assets/Images/Cutting tools/Tools card image.jpg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

function Projects() {
  const appWidth = useMediaQuery("(min-width:1105px)");
  const projects = [
    {
      category: "Automation",
      bg_image: automation,
      motionDuration: "0.5",
      linkTo: "/automation",
    },
    {
      category: "Fabrication",
      bg_image: fabrication,
      motionDuration: "1",
      linkTo: "/fabrications",
    },
    {
      category: "Jigs and fixtures",
      bg_image: jigsFixtures,
      motionDuration: "1.5",
      linkTo: "/fixtures",
    },

    {
      category: "Gauges",
      bg_image: gauges,
      motionDuration: "2",
      linkTo: "/gauges",
    },
    {
      category: "Cutting Tools",
      bg_image: tools,
      motionDuration: "2.5",
      linkTo: "/tools",
    },
  ];
  return (
    <div className="projectPage">
      <div
        className="projectCards"
        style={
          appWidth == true
            ? { margin: "300px auto", gap: "8rem" }
            : { margin: "150px auto", gap: "5rem" }
        }
      >
        {projects.map((data) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: data.motionDuration,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card sx={{ maxWidth: "400px" }}>
                <CardMedia
                  sx={{ height: 250, width: "250px" }}
                  image={data.bg_image}
                  title={data.category}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,0.5)",
                      height: "250px",
                    }}
                  >
                    <CardContent>
                      <h1 style={{ color: "white" }}>{data.category}</h1>
                    </CardContent>
                    <CardActions>
                      <Link to={data.linkTo}>
                        <Button size="small" variant="contained">
                          Explore
                        </Button>
                      </Link>
                    </CardActions>
                  </div>
                </CardMedia>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
