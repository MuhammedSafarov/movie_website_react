import React from "react";
import "./HomePage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeContent from "../../components/HomeContent/HomeContent";

const HomePage = () => {
  return (
    <div className="homepage">
      
      <div className="container">
        <Sidebar />
        <HomeContent />
      </div>
      
    </div>
  );
};

export default HomePage;
