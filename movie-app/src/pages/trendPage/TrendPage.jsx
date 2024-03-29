import React, { useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./TrendPage.scss";
import { useSelector, useDispatch } from "react-redux";
import TrendMovieCards from "../../components/HomeContent/TrendMovieCards";
import { getTrendMoviesAsync } from "../../store/actions/trendMovies";
import { Link } from "react-router-dom";

const TrendPage = () => {
  const dispatch = useDispatch();
  const { trendingMovies } = useSelector((state) => state.trendMovies);

  useEffect(() => {
    dispatch(getTrendMoviesAsync());
  }, [dispatch]);

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  return (
    <div className="trend-page">
      <h2>Trend Movies</h2>
      <div className="content-header">
        <div className="navigation-map">
          <Link className="link" to="/">
            Home
          </Link>
          <AiOutlineDoubleRight className="navigation-icon" />{" "}
          <Link to="/trend-movies" className="link">
            Trend Movies
          </Link>
        </div>
        <div className="filter-params">
          <form>
            <select name="Genre" id="">
              <option value="">Movie Genre</option>
              <option value="28">Action</option>
              <option value="12"> Adventure</option>
              <option value="35">Comedy</option>
            </select>
            <button className="apply">Apply</button>
          </form>
        </div>
      </div>
      <div className="trend-movie-cards">
        {trendingMovies?.map((el) => {
          return (
            <TrendMovieCards
              key={el?.id}
              id={el?.id}
              image={movie_img(el?.poster_path)}
              name={
                el?.original_title === undefined ? el?.name : el?.original_title
              }
              vote={parseFloat(el?.vote_average.toFixed(1))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendPage;
