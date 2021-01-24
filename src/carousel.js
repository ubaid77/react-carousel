import { useContext } from "react";
import { CarouselContext } from "./carouselContext";
import CarouselItem from "./carouselItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Carousel() {
  const { mainData, leftData, slideLeft, slideRight } = useContext(
    CarouselContext
  );
  return (
    <div className="carousel">
      <div className="header">
        <h2>Influencial Persons</h2>
        <div className="navigation">
          <button onClick={slideRight} disabled={leftData.length === 0}>
            <BsArrowLeft />
          </button>
          <button onClick={slideLeft} disabled={mainData.length < 3}>
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="slides">
        {mainData.map((item, index) => (
          <CarouselItem
            key={item.name}
            img={item.img}
            name={item.name}
            desc={item.desc}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
