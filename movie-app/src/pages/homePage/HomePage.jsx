import "./HomePage.scss";
import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiTrendingUp, BiCameraMovie } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineRecentActors } from "react-icons/md";
import axios from "axios";
import HomeContent from "../../components/HomeContent/HomeContent";
import SearchDetailCard from "./searchDetail/SearchDetailCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTrendMoviesAsync } from "../../store/actions/trendMovies";
import { discoverMoviesAsync } from "../../store/actions/discoverMovies";

const HomePage = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  function trendMovies() {
    dispatch(getTrendMoviesAsync());
  }
  function discoverMovies() {
    dispatch(discoverMoviesAsync());
  }

  useEffect(() => {
    trendMovies();
    discoverMovies();
  }, []);

  const findMovie = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&query=${searchKey}&page=1&include_adult=false`
    );
    let data = res?.data?.results;
    setSearchedMovie(data);
    localStorage.setItem("movieName", JSON.stringify(searchKey));
  };

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  return (
    <div className="homepage">
      <div className="container">
        <div className="sidebar">
          <ul className="sidebar-sections">
            <li className="search">
              <form onSubmit={findMovie} action="" className="search-form">
                <input
                  type="text"
                  onChange={(e) => setSearchKey(e.target.value)}
                />
                <button type="submit" className="submit-btn">
                  <FaSearch className="search-icon" />
                </button>
              </form>
            </li>
            <li>
              <Link className="link" to="/">
                <AiOutlineHome className="icon" />
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/trend-movies">
                <BiTrendingUp className="icon" />
                Trends
              </Link>
            </li>
            <li>
              <Link className="link">
                <FiMonitor className="icon" />
                TV Shows
              </Link>
            </li>
            <li>
              <Link className="link">
                <BiCameraMovie className="icon" /> Movies
              </Link>
            </li>
            <li>
              <Link className="link">
                <MdOutlineRecentActors className="icon" /> Actors
              </Link>
            </li>
          </ul>
        </div>
        {searchedMovie.length > 0 ? (
          <div className="search-content">
            {searchedMovie?.map((item) => {
              return (
                <SearchDetailCard
                  key={item?.id}
                  id={item?.id}
                  image={movie_img(item?.poster_path)}
                  name={
                    item?.original_title === undefined
                      ? item?.name
                      : item?.original_title
                  }
                  vote={item?.vote_average.toFixed(1)}
                />
              );
            })}
          </div>
        ) : (
          <HomeContent />
        )}
      </div>
    </div>
  );
};

export default HomePage;
