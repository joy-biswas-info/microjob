import CategorySlider from "../../components/categorySlider/categorySlider";
import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trusted/Trusted";

const Home = () => {
  return (
    <div>
      <Featured />
      <Trusted />
      <CategorySlider />
    </div>
  );
};

export default Home;
