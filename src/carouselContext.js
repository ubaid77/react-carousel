import { useState, createContext } from "react";
import { carouselData } from "./data";

export const CarouselContext = createContext();

export const CarouselProvider = (props) => {
  const [mainData, setMainData] = useState(carouselData);
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);

  const slideLeft = () => {
    if (mainData.length === 2) {
      return null;
    } else {
      let item = mainData.shift();
      setLeftData([...leftData, item]);
      setMainData(mainData);
    }
  };

  const slideRight = () => {
    if (leftData.length < 1) {
      return null;
    } else {
      let item = leftData.pop();
      mainData.unshift(item);
      setLeftData([...leftData]);
      setMainData(mainData);

      console.log(mainData);
    }
  };

  const state = {
    mainData,
    leftData,
    rightData,
  };

  return (
    <CarouselContext.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,
        rightData: state.leftData,
        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </CarouselContext.Provider>
  );
};
