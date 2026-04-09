import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import Hero from "../../component/landing/Hero";
import WarrantyChecker from "../../component/landing/WarrentyChecker";
import Services from "../../component/landing/Service";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WarrantyChecker />
      <Services />
      <Footer />
    </>
  );
};

export default LandingPage;