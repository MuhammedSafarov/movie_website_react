import React from "react";
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeContent from "../../components/HomeContent/HomeContent";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="container">
        <Sidebar />
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
