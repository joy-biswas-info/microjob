import Slide from "../slide/Slide";
import Carousel from "better-react-carousel";
import "./CategorySlider.scss";
import { cards } from "../../data";

const CategorySlider = () => {
  return (
    <div className="category-slider">
      <div className="container">
        <h2>Popular services</h2>
        <Carousel cols={5} rows={1} gap={10} loop>
          {cards.map((card) => (
            <Carousel.Item key={card.id}>
              <Slide item={card} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategorySlider;
