import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import background from "./assets/Rectangle.png";

function App() {
  return (
    <div className="App">
      <img src={background} alt="" />
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
