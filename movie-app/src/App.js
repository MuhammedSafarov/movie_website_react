import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
