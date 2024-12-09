import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import background from "./assets/Rectangle.png";
import Recommended from "./components/Recommended";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <img src={background} alt="" />
      <Header />
      <HeroSection />
      <Recommended />
      <Work />
    </div>
  );
}

export default App;
