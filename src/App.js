import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import AdvancedStatistics from "./components/AdvancedStatistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Shortener />
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
