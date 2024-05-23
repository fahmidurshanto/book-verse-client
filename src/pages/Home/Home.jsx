import Advertisement from "../../components/Advertisement/Advertisement";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Slider></Slider>
      <Categories></Categories>
      <Advertisement></Advertisement>
    </div>
  );
};

export default Home;
