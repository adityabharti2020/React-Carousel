import React, { useState } from "react";
import Carousel from "./Components/Carousel";
import MernImg from "../src/assets/mern.jpg";
import ReactImg from "../src/assets/React.png";
import NodeImg from "../src/assets/nodejs.png";
import MongoDBImg from "../src/assets/mongoDB.png";
import js from "../src/assets/js.png";
import htmlcss from "../src/assets/html_css.png";
import next from "../src/assets/next.jpg";
function App() {
  const [slides, setSlides] = useState([
    MernImg,
    ReactImg,
    NodeImg,
    MongoDBImg,
    js,
    htmlcss,
    next
  ]);


  // console.log(slides.img1);
  return <Carousel slides={slides} />;
}

export default App;
