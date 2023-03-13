import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/movies-detail/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
