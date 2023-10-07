import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Work from "./components/Work";

function App() {
  return (
    <div className="">
      <HeroBanner />
      <About />
      <Tools />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
