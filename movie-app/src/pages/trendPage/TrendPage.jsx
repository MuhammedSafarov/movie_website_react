import React from "react";
import "./TrendPage.scss";
import { useSelector } from "react-redux";
import TrendMovieCards from "../../components/HomeContent/TrendMovieCards";

const TrendPage = () => {
  const { trendingMovies } = useSelector((state) => state.trendMovies);

  console.log(trendingMovies);

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  return (
    <div className="trend-movies">
      <div className="navigation-map">Home Trend Movies </div>
      <div className="filter-params">
        <select name="Genre" id="">
          <option value="kjsd">hel</option>
          <option value="lm"> hello</option>
        </select>
      </div>
      <div className="movie-cards">
        {trendingMovies?.map((el) => {
          <TrendMovieCards
            key={el?.id}
            id={el.id}
            image={movie_img(el?.poster_path)}
            name={
              el?.original_title === undefined ? el?.name : el?.original_title
            }
            vote={parseFloat(el?.vote_average.toFixed(1))}
          />;
        })}
      </div>
    </div>
  );
};

export default TrendPage;
