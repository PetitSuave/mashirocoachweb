'use client';

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ReferenceCard} from "./reference-card";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function ReferenceCarousel({ referenceCards }) {
    return (
        <div className="py-16">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="px-4"
            >
                {referenceCards.map(card => (
                    <div key={card.name}>
                        <ReferenceCard title={card.title} name={card.name} text={card.text}/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}