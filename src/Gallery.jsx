import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import image1 from "../src/assets/Images/Image01.webp"
import image2 from "../src/assets/Images/Image02.webp"
import image3 from "../src/assets/Images/Image03.webp"
import image4 from "../src/assets/Images/Image04.webp"
import image5 from "../src/assets/Images/Image05.webp"
import image6 from "../src/assets/Images/Image06.webp"
import image7 from "../src/assets/Images/Image07.webp"
import image8 from "../src/assets/Images/Image08.webp"
import image9 from "../src/assets/Images/Image09.webp"
import image10 from "../src/assets/Images/Image10.webp"
import image11 from "../src/assets/Images/Image11.webp"
import image12 from "../src/assets/Images/Image12.webp"
import image13 from "../src/assets/Images/Image13.webp"
import image14 from "../src/assets/Images/Image14.webp"

function Gallery() {
  const images = [
    {
      image: image1,
      transDuration: 1,
    },
    {
      image: image2,
      transDuration: 2,
    },
    {
        image: image3,
        transDuration: 3,
    },
    {
        image: image4,
        transDuration: 4,
    },
    {
        image: image5,
        transDuration: 5,
    },
    {
        image: image6,
        transDuration: 6,
    },
    {
        image: image7,
        transDuration: 7,
    },
    {
        image: image8,
        transDuration: 8,
    },
    {
        image: image9,
        transDuration: 9,
    },
    {
        image: image10,
        transDuration: 10,
    },
    {
        image: image11,
        transDuration: 11,
    },
    {
        image: image12,
        transDuration: 12,
    },
    {
        image: image13,
        transDuration: 13,
    },
    {
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
                    title="green iguana"
                  />
                </Card>
              ) : (
                <Card className="imageCard" style={{ margin: "20px" }}>
                  <CardMedia
                    style={{ width: "100px", height: "200px" }}
                    image={img.image}
                    title="green iguana"
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
