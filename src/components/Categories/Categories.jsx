import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <div className="card card-body grid md:grid-cols-2 lg:grid-cols-3">
      {categories.slice(0, 6).map((category) => (
        <div key={category._id} className=" shadow-xl shadow-sky-300">
          <h3 className="text-2xl font-semibold text-center mt-5 shadow-black">
            {category.name}
          </h3>
          <img src={category.image} className="w-96 h-64 mx-auto" />
          <button className="btn btn-outline btn-info my-5 w-full">
            View details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
