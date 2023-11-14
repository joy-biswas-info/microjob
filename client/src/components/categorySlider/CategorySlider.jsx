import Slide from "../slide/Slide";
import Carousel from "better-react-carousel";
import "./CategorySlider.scss";
import PropTypes from "prop-types";

const CategorySlider = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="category-slider">
      <div className="container">
        <h2>Popular services</h2>
        <Carousel cols={5} rows={1} gap={50} loop>
          {items?.map((card) => (
            <Carousel.Item key={card.id}>
              <Slide item={card} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

CategorySlider.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CategorySlider;
