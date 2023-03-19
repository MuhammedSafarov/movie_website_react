import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.scss";

const Header = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);

  const findMovie = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&query=${searchKey}&page=1&include_adult=false`
    );
    let data = res?.data?.results;
    setSearchedMovie(data);
  };

  return (
    <div className="header">
      <div className="logo">
        <div className="navbar-name">
          <Link className="name-link" to="/">
            M's MOVIE
          </Link>
        </div>
      </div>
      <div className="search">
        <form onSubmit={findMovie} action="" className="search-form">
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type="submit" className="submit-btn">
            Search
          </button>
        </form>
      </div>
      <ul className="navbar-sections">
        <li>Regiter</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
