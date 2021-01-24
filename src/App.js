import "./App.css";
import Carousel from "./carousel";
import { CarouselProvider } from "./carouselContext";
function App() {
  return (
    <div className="App">
      <CarouselProvider>
        <Carousel />
      </CarouselProvider>
    </div>
  );
}

export default App;
