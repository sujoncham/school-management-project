import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const slider = [
    {
        id:1,
        img: 'https://placeimg.com/800/200/arch',
    
    },
    {
        id:2,
        img: 'https://placeimg.com/800/200/arch',
    
    },
    {
        id:3,
        img: 'https://placeimg.com/800/200/arch',
    
    },
    {
        id:4,
        img: 'https://placeimg.com/800/200/arch',
    
    },
]
const Banner = () => {

    const [slides, setSlides] = useState(slider)

    useEffect(()=>{
        setSlides(slider)
    }, [])

    return (
        <div className="carousel w-full">
            { slides.map(slide => <div key={slide.id} slide={slide} id={`slide${slide.id}`} className="carousel-item relative w-full">
                    <img src={slide.img} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link to={`#slide${slide.id}`} className="btn btn-circle"><FaAngleLeft /> </Link> 
                    <Link to={`#slide${slide.id}`} className="btn btn-circle"><FaAngleRight /> </Link>
                    </div>
                </div> )
            }
            
        </div>
    );
};

export default Banner;