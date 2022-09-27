import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Features from "../components/Features";
import Categories  from "../components/Categories";
import Bestsellers from "../components/Bestsellers";
import Footer from "../components/Footer"
import Newsletter from "../components/NewsLetter";
const Home = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Features />
      <Categories />
      <Bestsellers />
      <Newsletter/>
      <Footer />

    
    </div>
  );
};
export default Home;
