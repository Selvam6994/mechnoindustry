import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

function Gallery() {
  const images = [
    {
      image: "/src/assets/Images/Image01.webp",
      transDuration: 1,
    },
    {
      image: "/src/assets/Images/Image02.webp",
      transDuration: 2,
    },
    {
      image: "/src/assets/Images/Image03.webp",
      transDuration: 3,
    },
    {
      image: "/src/assets/Images/Image04.webp",
      transDuration: 4,
    },
    {
      image: "/src/assets/Images/Image05.webp",
      transDuration: 5,
    },
    {
      image: "/src/assets/Images/Image06.webp",
      transDuration: 6,
    },
    {
      image: "/src/assets/Images/Image07.webp",
      transDuration: 7,
    },
    {
      image: "/src/assets/Images/Image08.webp",
      transDuration: 8,
    },
    {
      image: "/src/assets/Images/Image09.webp",
      transDuration: 9,
    },
    {
      image: "/src/assets/Images/Image10.webp",
      transDuration: 10,
    },
    {
      image: "/src/assets/Images/Image11.webp",
      transDuration: 11,
    },
    {
      image: "/src/assets/Images/Image12.webp",
      transDuration: 12,
    },
    {
      image: "/src/assets/Images/Image13.webp",
      transDuration: 13,
    },
    {
      image: "/src/assets/Images/Image14.webp",
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
