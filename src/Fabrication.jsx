import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import transportPallet from "./assets/Images/Industrial services/Fabrications/Pallets/Transmission pallet for Transportation.jpg";
import warehousePallet from "./assets/Images/Industrial services/Fabrications/Pallets/Transmission Storage Pallets in the warehouse.jpg";
import storagePallet from "./assets/Images/Industrial services/Fabrications/Pallets/Transmission Storage Pallets.jpg";

import ssTrolly from "./assets/Images/Industrial services/Fabrications/trollys and Racks/SS pipe trollys.jpg";
import aluminiumTrolly from "./assets/Images/Industrial services/Fabrications/trollys and Racks/Aluminium frame trollys.jpg";
import absPipeTrolly from "./assets/Images/Industrial services/Fabrications/trollys and Racks/ABS pipes fifo racks.jpg";

import aluminiumRobotSafetyFencing from "./assets/Images/Industrial services/Fabrications/Safety fencing/Aluminium Robot safety fencing.jpg";
import acralicRobotSafetyFencing from "./assets/Images/Industrial services/Fabrications/Safety fencing/Acralic robot safety fencing.jpg";
import aluminiumSafetyFencingForConveyor from "./assets/Images/Industrial services/Fabrications/Safety fencing/Aluminium safety fencing for conveyor.jpg";
import aluminiumSafetyFencingForSpm from "./assets/Images/Industrial services/Fabrications/Safety fencing/Aluminium safety fencing for spm.jpg";
import msPartitionFencing  from "./assets/Images/Industrial services/Fabrications/Safety fencing/MS partition fencing.jpg";
import msRobotSafetyFencing from "./assets/Images/Industrial services/Fabrications/Safety fencing/MS Robot safety fencing.jpg";

import aluminiumFrameWorkstationsWithStorage from "./assets/Images/Industrial services/Fabrications/Work stations/Aluminium Frame Workstations With Storage.jpg";
import aluminiumFrameWorkstations from "./assets/Images/Industrial services/Fabrications/Work stations/Aluminium Frame Workstations.jpg";
import msStandAloneWorkstations from "./assets/Images/Industrial services/Fabrications/Work stations/MS Stand alone workstations.jpg";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
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
const fabrication = [
  {
    name: "Pallets",
    type: [
      {
        image: transportPallet,
        title: "Transmission Pallets for Transportation",
      },
      {
        image: warehousePallet,
        title: "Transmission Pallets for Warehouse",
      },
      {
        image: storagePallet,
        title: "Transmission Storage Pallets",
      },
    ],
  },
  {
    name: "Trollys",
    type: [
      {
        image: ssTrolly,
        title: "Stainless Steel Trollys",
      },
      {
        image: aluminiumTrolly,
        title: "Aluminium Frame Trollys",
      },
      {
        image: absPipeTrolly,
        title: "ABS pipe Trollys",
      },
    ],
  },
  {
    name: "Safety Fencing",
    type: [
      {
        image: aluminiumRobotSafetyFencing,
        title: "Aluminium Robot Safety Fencing",
      },
      {
        image: acralicRobotSafetyFencing,
        title: "Acralic Robot Safety Fencing",
      },
      {
        image:   aluminiumSafetyFencingForConveyor,
        title: "Aluminium Safety Fencing For Conveyor",
      },
      {
        image:  aluminiumSafetyFencingForSpm,
        title: "Aluminium Safety Fencing For Spm",
      },
      {
        image:  msPartitionFencing,
        title: "MS Partition Fencing",
      },
      {
        image: msRobotSafetyFencing,
        title: "MS Robot Safety Fencing",
      },
    ],
  },
  {
    name: "Work Stations",
    type: [
      {
        image: aluminiumFrameWorkstationsWithStorage,
        title: "Aluminium Frame Workstations With Storage",
      },
      {
        image:  aluminiumFrameWorkstations,
        title: "Aluminium Frame Workstations",
      },
      {
        image:     msStandAloneWorkstations,
        title: "MS Stand Alone Workstations",
      },
    ],
  },
];

console.log(fabrication.map((ele) => ele.type.map((e) => e.title)));

function Fabrication() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const carousel = useRef();

  return (
    <div className="fabricationPage">
      {fabrication.map((ele) => (
        <>
          <Section>
            <h2 style={{ color: "white" }}>{ele.name}</h2>
          </Section>

          <div className="projectCard">
            <Section>
              <motion.div
                ref={carousel}
                className="projectCarousel"
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
                  {ele.type.map((job) => {
                    return (
                      <motion.div whileTap={{ cursor: "grabbing" }}>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              className="cardMedia"
                              component="img"
                              height="150"
                              width="450"
                              image={job.image}
                              alt={job.title}
                            />
                            <CardContent style={{ height: "100px"}}>
                              <Typography
                               
                                variant="h6"
                                component="div"
                              >
                                {job.title}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </Section>
          </div>
        </>
      ))}
      {/* <Section>
        <h1 style={{ color: "white" }}>Trollys</h1>
      </Section>

      <div className="projectCard">
        <Section>
          <motion.div
            ref={carousel}
            className="projectCarousel"
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
              {trollys.map((trolly) => {
                return (
                  <motion.div
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          className="cardMedia"
                          component="img"
                          height="150"
                          image={trolly.image}
                          alt={trolly.title}
                        />
                        <CardContent style={{ height: "100px" }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {trolly.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </Section>
      </div> */}
    </div>
  );
}

export default Fabrication;
