import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TrendDetailPage from "./pages/DetailPage/TrendDetailPage";
import DiscoverDetailPage from "./pages/DetailPage/DiscoverDetailPage";
import SearchDetailPage from "./pages/homePage/searchDetail/SearchDetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/trend-movies-detail/:id" element={<TrendDetailPage />} />
        <Route
          path="/discover-movies-detail/:id"
          element={<DiscoverDetailPage />}
        />
        <Route path='/search/movies/:id' element={<SearchDetailPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
