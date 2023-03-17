import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomeContent.scss";
import MovieCards from "./MovieCards";
import SlickSlider from "../Slider/SlickSlider";
import TrendMovieCards from "./TrendMovieCards";

const HomeContent = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);

  const discoverNewMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((response) => {
        setDiscoverMovies(response?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const trendingMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d448aa11b683dfdce0641c3887f9a164"
      )
      .then((response) => {
        setTrendMovies(response?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  useEffect(() => {
    discoverNewMovies();
    trendingMovies();
  }, []);

  return (
    <div className="home-content">
      <SlickSlider />
      <div className="story-boxes">
        <div className="story-box">
          <img
            src="https://thecentraltrend.com/wp-content/uploads/2022/10/MV5BOTczM2JhOGMtMmQzOC00ZjgwLTlhNDEtMzU3NDRmMTQzMjM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_-607x900.jpg"
            alt=""
          />
        </div>
        <div className="story-box unwatched">
          <img
            src="https://cdn.moviefone.com/admin-uploads/posters/aboutmyfather-movie-poster_1677101855.jpg?d=360x540&q=60"
            alt=""
          />
        </div>
        <div className="story-box unwatched">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5b/Pearl_theatricalposter.jpg"
            alt=""
          />
        </div>
        <div className="story-box">
          <img
            src="https://thecentraltrend.com/wp-content/uploads/2023/03/We-have-a-Ghost-608x900.jpg"
            alt=""
          />
        </div>
        <div className="story-box unwatched">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/best-romantic-movies-2023-love-again-64075f6a2f1d1.jpg?resize=480:*"
            alt=""
          />
        </div>
        <div className="story-box">
          <img
            src="https://image.tmdb.org/t/p/original/oz3m1L64EmfSvXOP9fsarhGQiK.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="movies">
        <div className="content-header">
          <div className="tick"></div>
          <div className="content-name">Discover Movies</div>
        </div>

        <div className="movie-cards">
          {discoverMovies?.map((item) => {
            return (
              <MovieCards
                key={item?.id}
                id={item?.id}
                image={movie_img(item?.poster_path)}
                name={
                  item?.original_title === undefined
                    ? item?.name
                    : item?.original_title
                }
                vote={item?.vote_average}
              />
            );
          })}
        </div>
      </div>
      <div className="trend-movies">
        <div className="content-header">
          <div className="tick"></div>
          <div className="content-name">Trends</div>
        </div>
        <div className="movie-cards">
          {trendMovies?.map((el) => {
            return (
              <TrendMovieCards
                key={el?.id}
                id={el.id}
                image={movie_img(el?.poster_path)}
                name={
                  el?.original_title === undefined
                    ? el?.name
                    : el?.original_title
                }
                vote={parseFloat(el?.vote_average.toFixed(1))}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
