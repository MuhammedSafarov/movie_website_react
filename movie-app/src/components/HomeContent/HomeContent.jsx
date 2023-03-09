import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomeContent.scss";
import MovieCards from "./MovieCards";

const HomeContent = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((response) => {
        setDiscoverMovies(response?.data?.results);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-content">
      <div className="discover-movies">
        <div className="content-header">
          <div className="tick"></div>
          <div className="content-name">Discover Movies</div>
        </div>
        <MovieCards discoverMovies={discoverMovies} />
      </div>
    </div>
  );
};

export default HomeContent;
