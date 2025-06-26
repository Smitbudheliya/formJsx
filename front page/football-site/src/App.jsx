import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import ScrollSection from "./components/ScrollSection";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <Features />
      <ScrollSection />
      <CallToAction />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;