import logo from "./logo.svg";
import "./App.css";
import NavBar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import CopyrightSection from "./layouts/CopyrightSection";
import MastHead from "./components/MastHead";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div>
      <NavBar />
      <MastHead />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CopyrightSection />
    </div>
  );
}

export default App;
