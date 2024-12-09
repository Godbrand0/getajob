import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import background from "./assets/Rectangle.png";
import Recommended from "./components/Recommended";
import Work from "./components/Work";
import Categories from "./components/Categories";
import Network from "./components/Network";

function App() {
  return (
    <div className="App">
      <img src={background} alt="" />
      <Header />
      <HeroSection />
      <Recommended />
      <Work />
      <Categories />
      <Network />
    </div>
  );
}

export default App;
