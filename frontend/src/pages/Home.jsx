import CategoryCarousel from "@/components/shared/CategoryCarousel";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import LatestJob from "@/components/shared/LatestJob";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
      <HeroSection />
      <CategoryCarousel />
      <LatestJob />
      <Footer/>
      </div>
    </>
  );
};

export default Home;
