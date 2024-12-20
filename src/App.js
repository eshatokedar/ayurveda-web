import React from "react";
import "./styles/Global.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import DiscoverComponent from "./components/Discover";
import Consultations from "./components/Consultations";
import MidBanner from "./components/MidBanner";
import Approach from "./components/Approach";
import CustomerReviews from "./components/Reviews";
import Experts from "./components/Experts";
import AppPromo from "./components/AppPromo";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <DiscoverComponent/>
      <Consultations />
      <MidBanner />
      <Approach/>
      <CustomerReviews/>
      <Experts/>
      <AppPromo />
      <Footer />
    </>
  );
}

export default App;

