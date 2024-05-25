import Advertisement from "../../components/Advertisement/Advertisement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Watch from "../../components/Watch/Watch";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Watch></Watch>
      <Slider></Slider>
      <Categories></Categories>
      <Advertisement></Advertisement>
      <Footer></Footer>
    </div>
  );
};

export default Home;
