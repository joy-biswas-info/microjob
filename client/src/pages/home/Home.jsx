import CategorySlider from "../../components/categorySlider/categorySlider";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import Trusted from "../../components/trusted/Trusted";
import { cards } from "../../data";

const Home = () => {
  return (
    <div>
      <Featured />
      <Trusted />
      <CategorySlider items={cards} />
    </div>
  );
};

export default Home;
