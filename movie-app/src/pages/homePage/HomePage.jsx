import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeContent from "../../components/HomeContent/HomeContent";
import Sidebar from "../../components/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />
      <div className="container">
        <Sidebar/>
        <HomeContent/>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
