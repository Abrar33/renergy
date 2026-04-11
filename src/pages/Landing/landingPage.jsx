import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import Hero from "../../component/landing/Hero";
import WarrantyChecker from "../../component/landing/WarrentyChecker";
import Services from "../../component/landing/Service";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
const LandingPage = () => {
  const { login, role, user, loading } = useContext(AuthContext); 
  console.log('role:', role);
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