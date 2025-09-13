// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/Grid";
import Quote from "./components/Quote";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
