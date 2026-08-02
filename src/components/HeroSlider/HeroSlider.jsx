import "./HeroSlider.css";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";
import hero5 from "../../assets/hero5.png";

function HeroSlider() {

    const images = [
        hero1,
        hero2,
        hero3,
        hero4,
        hero5
    ];

    // Clone first and last image
    const slides = [
        images[images.length - 1],
        ...images,
        images[0]
    ];

    const [currentSlide, setCurrentSlide] = useState(1);
    const [transition, setTransition] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);

    }, [currentSlide]);

    const nextSlide = () => {

        setTransition(true);
        setCurrentSlide(prev => prev + 1);

    };

    const previousSlide = () => {

        setTransition(true);
        setCurrentSlide(prev => prev - 1);

    };

    const handleTransitionEnd = () => {

        if(currentSlide === slides.length - 1){

            setTransition(false);
            setCurrentSlide(1);

        }

        if(currentSlide === 0){

            setTransition(false);
            setCurrentSlide(slides.length - 2);

        }

    };

    useEffect(() => {

        if(!transition){

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransition(true);
                });
            });

        }

    }, [transition]);

    return (

        <section className="hero">

            <div
                className="hero-slider"
                style={{
                    transform:`translateX(-${currentSlide * 100}%)`,
                    transition: transition
                        ? "transform 0.8s ease-in-out"
                        : "none"
                }}
                onTransitionEnd={handleTransitionEnd}
            >

                {slides.map((image,index)=>(

                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                    />

                ))}

            </div>

            <button
                className="arrow left-arrow"
                onClick={previousSlide}
            >
                <FaChevronLeft/>
            </button>

            <button
                className="arrow right-arrow"
                onClick={nextSlide}
            >
                <FaChevronRight/>
            </button>

            <div className="dots">

                {images.map((_,index)=>(

                    <span
                        key={index}
                        className={
                            currentSlide===index+1
                            ? "dot active"
                            : "dot"
                        }
                        onClick={()=>{
                            setTransition(true);
                            setCurrentSlide(index+1);
                        }}
                    ></span>

                ))}

            </div>

        </section>

    );

}

export default HeroSlider;