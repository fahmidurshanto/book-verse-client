import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Slider = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <Carousel infiniteLoop autoPlay autoFocus>
      {categories.map((category, index) => (
        <div className="h-[60vh]" key={index}>
          <img className="shadow-2xl shadow-emerald-200" src={category.image} />
          <p className="legend">{category.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
