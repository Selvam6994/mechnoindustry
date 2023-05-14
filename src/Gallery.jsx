import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import image1 from "../src/assets/Images/Image01.jpg";
import image2 from "../src/assets/Images/Image02.jpg";
import image3 from "../src/assets/Images/Image03.jpg";
import image4 from "../src/assets/Images/Image04.jpg";
import image5 from "../src/assets/Images/Image05.jpg";
import image6 from "../src/assets/Images/Image06.jpg";
import image7 from "../src/assets/Images/Image07.jpg";
import image8 from "../src/assets/Images/Image08.jpg";
import image9 from "../src/assets/Images/Image09.jpg";
import image10 from "../src/assets/Images/Image10.jpg";
import image11 from "../src/assets/Images/Image11.webp";
import image12 from "../src/assets/Images/Image12.jpg";
import image13 from "../src/assets/Images/Image13.jpg";
import image14 from "../src/assets/Images/Image14.jpg";

function Gallery() {
  const images = [
    {
      name: "Safety Fencing in KIA",
      image: image1,
      transDuration: 1,
    },
    {
      name: "Nachi Robot Arm",
      image: image2,
      transDuration: 2,
    },
    {
      name: "Pneumatic Gripper",
      image: image3,
      transDuration: 3,
    },
    {
      name: "Jig",
      image: image4,
      transDuration: 4,
    },
    {
      name: "Safety Fencing in KIA and Hyundai Transys",
      image: image5,
      transDuration: 5,
    },
    {
      name: "Safety Fencing",
      image: image6,
      transDuration: 6,
    },
    {
      name: "Robot Safety Fencing",
      image: image7,
      transDuration: 7,
    },
    { name: "Chute Trolly", image: image8, transDuration: 8 },
    {
      name: "Tilting machine",
      image: image9,
      transDuration: 9,
    },
    {
      name: "Trolly",
      image: image10,
      transDuration: 10,
    },
    {
      name: "Robot",
      image: image11,
      transDuration: 11,
    },
    {
      name: "S S Table",
      image: image12,
      transDuration: 12,
    },
    {
      name: "Inspection table for leading MNC company",
      image: image13,
      transDuration: 13,
    },
    {
      name: "Aluminium Pallet",
      image: image14,
      transDuration: 14,
    },
  ];

  const galleryWidth = useMediaQuery("(min-width:1250px)");

  const minGalleryWidth = useMediaQuery("(min-width:380px)");
  return (
    <div className="gallerySection">
      <div className="galleryImageSection">
        {images.map((img) => (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: -100 }}
            transition={{
              type: "spring",
              duration: img.transDuration,
            }}
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              {minGalleryWidth == true ? (
                <Card className="imageCard" style={{ margin: "20px" }}>
                  <CardMedia
                    style={
                      galleryWidth == true
                        ? { width: "250px", height: "300px" }
                        : { width: "150px", height: "200px" }
                    }
                    image={img.image}
                    title={img.name}
                  />
                </Card>
              ) : (
                <Card className="imageCard" style={{ margin: "20px" }}>
                  <CardMedia
                    style={{ width: "100px", height: "200px" }}
                    image={img.image}
                    title={img.name}
                  />
                </Card>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
