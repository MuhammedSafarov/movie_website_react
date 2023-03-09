import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomeContent.scss";
import MovieCards from "./MovieCards";

const HomeContent = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&page=1"
      )
      .then((response) => {
        setPopularMovies(response?.data?.results);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-content">
      <div className="content-header">
        <div className="tick"></div>
        <div className="content-name">New Movies</div>
      </div>
      <MovieCards popularMovies={popularMovies}/>

      {/* <div className="movie-cards">
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
        <MovieCards/>
      </div> */}
    </div>
  );
};

export default HomeContent;
