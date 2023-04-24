import React from "react";
import "./HomeContent.scss";
import MovieCards from "./MovieCards";
import SlickSlider from "../Slider/SlickSlider";
import TrendMovieCards from "./TrendMovieCards";
import { useSelector } from "react-redux";

const HomeContent = () => {
  const { discoveredMovies } = useSelector((state) => state.discoverMovies);
  const { trendingMovies } = useSelector((state) => state.trendMovies);

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

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
          {discoveredMovies?.map((item) => {
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
          {trendingMovies?.map((el) => {
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
