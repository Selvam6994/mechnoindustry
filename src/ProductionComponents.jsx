import React from "react";

import component2 from "./assets/Images/Presicion Components/Component 2.jpg";
import component6 from "./assets/Images/Presicion Components/Component 6.jpg";
import component7 from "./assets/Images/Presicion Components/Component 7.jpg";
import component5 from "./assets/Images/Presicion Components/Component 5.jpg";
import component8 from "./assets/Images/Presicion Components/Component 8.jpg";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
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

function ProductionComponents() {
    const gauges = [
        {
            image: component2,
        },
        {
            image: component6,
        },
        {
            image: component7,
        },
        {
            image: component5,
        },
        {
            image: component8,
        },
    ];
    const screenWidth = useMediaQuery("(min-width:550px)");
    return (
        <div className="productionCompPage">
            <Section>
                <h1 style={{ color: "white" }}>Production Components</h1>
            </Section>
            <Section>
                <h3 style={{ color: "white" }}>Any special components can be manufactured based on bulk orders.</h3>
            </Section>
            <div className="productionCompCard">
                {gauges.map((projects) => (
                    <Section>
                        <Card sx={{ maxWidth: 300,minWidth:280}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={projects.image}
                                    alt={projects.image}
                                />
                            </CardActionArea>
                        </Card>
                    </Section>
                ))}
            </div>
        </div>
    );
}

export default ProductionComponents;
