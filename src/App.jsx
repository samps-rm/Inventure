import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import About from "./components/About/About";
import Badges from "./components/Badges/Badges";
import BestSellers from "./components/BestSellers/BestSellers";
import Shop from "./components/Shop/Shop";

function App() {

  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <Badges />
      <BestSellers />
      <Shop />
    </>
  );

}

export default App;