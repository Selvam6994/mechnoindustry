import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import automation from "../src/assets/Images/Automation.webp";
import industrialService from "../src/assets/Images/Industrial Services.webp";
import useMediaQuery from "@mui/material/useMediaQuery";


function Homecompnents() {
  const matches = useMediaQuery("(min-width:870px)");
  const cardContent = [
    {
      image: automation,
      title: "Industrial Services",
      content:
        "We fulfill all your industrial needs to make your organization much efficient and profitable",
    },
    {
      image: industrialService,
      title: "Automation",
      content:
        "Towards the Era of Industrial Automation! A destination where you can visualize the reality of moving your company into the Innovation driven Automation World",
    },
  ];

  return (
    <div>
      {matches == true ? (
        <div className="beforeHomeCards">
          {cardContent.map((data) => {
            return (
              <motion.div
                className="boxBefore"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Card
                  sx={{
                    height: "400px",
                    borderRadius: "10px",
                    backgroundColor: "transparent",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={data.title}
                    height="200"
                    image={data.image}
                  />
                  <div
                    key={cardContent.title}
                    className="cardContentSection"
                    style={{ color: "white" }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="white">
                        {data.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(206,211,220)",
                          color: "black",
                        }}
                      >
                       Know More
                      </Button>
                    </CardActions>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="afterHomeCards">
          {cardContent.map((data) => {
            return (
              <motion.div
                className="boxAfter"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                    backgroundColor: "transparent",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={data.title}
                    height="140"
                    image={data.image}
                  />
                  <div key={cardContent.title} className="cardContentSection">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(206,211,220)",
                          color: "black",
                        }}
                      >
                        Know More
                      </Button>
                    </CardActions>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Homecompnents;
