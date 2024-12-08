import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import background from "./assets/Rectangle.png";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className="App">
      <img src={background} alt="" />
      <Header />
      <HeroSection />
      <Recommended />
    </div>
  );
}

export default App;
