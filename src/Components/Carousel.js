import React, { useState } from "react";
import "./carousel.css";
// import styled from styled-components;
import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidCircle,
} from "react-icons/bi";
// const
const Carousel = ({ slides }) => {
  const [activeimg, setactiveimage] = useState(0);

  const imgMatchedhandler = (index) => {
    setactiveimage(index);
    // setIsActive(index);
  };

  const SlidechangeHandlerLeft = () => {
    if (activeimg === 0) {
      return setactiveimage(5);
    }
    setactiveimage(activeimg - 1);
  };

  const SlidechangeHandlerRight = () => {
    if (activeimg >= slides.length - 1) {
      return setactiveimage(0);
    }
    setactiveimage(activeimg + 1);
  };
  // const carouselStyle = {

  //   transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
  //   transform: `translateX(-${activeIndex * 100}%)`, // Assuming each slide takes the full width (100%)
  // };

  return (
    <div className="main">
      <div className="sub">
        <div
          className="prev_slide"
          id="negative"
          onClick={SlidechangeHandlerLeft}
        >
          <BiSolidLeftArrow />
        </div>
        <div className="img_container">
          {slides.map((slide, index) => {
            return activeimg === index ? (
              <div
                className={`images ${activeimg ? 'active' : ''}`}
                id="img1"
                key={slide}
              >
                <img src={slide} alt="" />
              </div>
            ) : (
              <></>
            );
          })}
        </div>
        <div
          className="next_slide"
          id="positive"
          onClick={SlidechangeHandlerRight}
        >
          <BiSolidRightArrow />
        </div>
      </div>
      <div className="Change_button">
        {slides.map((slidebtn, indexbtn) => {
          // console.log(slidebtn + "index => " + indexbtn);
          return (
            <div
              className="btn"
              onClick={() => imgMatchedhandler(indexbtn)}
              key={slidebtn}
              id="slidebtn"
              style={{
                color: activeimg === indexbtn ? "red" : "gray",
                cursor: "pointer",
              }}
            >
              <BiSolidCircle />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
