import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import caroselImage1 from "../src/assets/Images/Carosel image1.webp";
import caroselImage2 from "../src/assets/Images/Carosel image2.webp";
import caroselImage3 from "../src/assets/Images/Carosel image3.webp";
import Homecompnents from "./Homecompnents";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import aboutUsImage from "../src/assets/Images/About us.webp";
import { Link } from "react-router-dom";
import client1 from "../src/assets/Images/company icons/BONFIGLIOLI.png";
import client2 from "../src/assets/Images/company icons/ELFORGE.png";
import client3 from "../src/assets/Images/company icons/hyundai transys.png";
import client4 from "../src/assets/Images/company icons/Essae.png";
import client5 from "../src/assets/Images/company icons/Fives.png";
import client6 from "../src/assets/Images/company icons/Kia.png";
import client7 from "../src/assets/Images/company icons/Malles.png";
import client8 from "../src/assets/Images/company icons/Neel Metal.png";
import client9 from "../src/assets/Images/company icons/Novares.png";
import client10 from "../src/assets/Images/company icons/Tafe.png";
import client12 from "../src/assets/Images/company icons/JBM.png";
import client13 from "../src/assets/Images/company icons/Wia.png";
import client14 from "../src/assets/Images/company icons/NewTech.png";
import client15 from "../src/assets/Images/company icons/Alison.png";
import client16 from "../src/assets/Images/company icons/Bgrneo.png";

function Home() {
  const imageAndCaption = [
    {
      image: caroselImage1,
      caption: "The Next-Gen Industrial Automation",
    },
    {
      image: caroselImage2,
      caption: "Your Dream of Automation Ends Here!",
    },
    {
      image: caroselImage3,
      caption: "For all your Industrial Automation Needs",
    },
  ];

  const clientLogos = [
    {
      image: client1,
    },
    {
      image: client2,
    },
    {
      image: client3,
    },
    {
      image: client4,
    },
    {
      image: client5,
    },
    {
      image: client6,
    },
    {
      image: client7,
    },
    {
      image: client8,
    },
    {
      image: client9,
    },
    {
      image: client10,
    },
    {
      image: client12,
    },
    {
      image: client13,
    },
    {
      image: client14,
    },
    {
      image: client15,
    },
    {
      image: client16,
    },
  ];
  const [cards, setCards] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const carousel = useRef();
  const scrollDown = () => {
    if (window.scrollY >= 150) {
      setCards(true);
    } else {
      setCards(false);
    }
  };
  window.addEventListener("scroll", scrollDown);
  return (
    <div className="homePage">
      <div className="carouselSection">
        <Carousel className="carousel">
          {imageAndCaption.map((elements) => (
            <Carousel.Item key={elements.image}>
              <img
                className="carouselImage"
                src={elements.image}
                alt="First slide"
              />
              <Carousel.Caption className="carouselCaption">
                <h1>{elements.caption}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="homeContent">
          <motion.div
            className="aboutBox"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Card
              className="aboutCard"
              sx={{
                maxWidth: "100%",
                height: "300px",
                borderRadius: "10px",
                backgroundColor: "transparent",
              }}
            >
              <div className="imageSection">
                <CardMedia
                  component="img"
                  alt="Image About Us"
                  height="300"
                  width="100"
                  image={aboutUsImage}
                />
              </div>
              <div className="contentSection">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    style={{ fontSize: "18px" }}
                  >
                    Mechno Dream Industry is a Young, Efficient and Passionate
                    workstation where all your industrial dreams would be
                    brought into reality…
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
                    <Link to="/about">Know More</Link>
                  </Button>
                </CardActions>
              </div>
            </Card>
          </motion.div>
          <h4 style={{ color: "white" }}>Our Clients</h4>
          <motion.div
            ref={carousel}
            className="clientCarousel"
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
              className="innerCarousel"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {clientLogos.map((logo) => {
                return (
                  <motion.div
                    className="item"
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <img src={logo.image} alt=""></img>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          {cards == true ? <Homecompnents /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Home;
