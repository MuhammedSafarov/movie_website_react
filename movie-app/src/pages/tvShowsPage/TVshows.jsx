import React, { useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "../trendPage/TrendPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTvShowsAsync } from "../../store/actions/tvShows";
import TvCard from "./TvCard";

const TVshows = () => {
  const dispatch = useDispatch();
  const { allTvShows } = useSelector((state) => state.tvShows);

  useEffect(() => {
    dispatch(getTvShowsAsync());
  }, [dispatch]);

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  return (
    <div className="trend-page">
      <h2>TV Shows</h2>
      <div className="content-header">
        <div className="navigation-map">
          <Link className="link" to="/">
            Home
          </Link>
          <AiOutlineDoubleRight className="navigation-icon" />{" "}
          <Link to="/tv-shows" className="link">
            TV Shows
          </Link>
        </div>
        <div className="filter-params">
          <form>
            <select name="Types" id="">
              <option value="">Tv Show Types</option>
              <option value="28">Action</option>
              <option value="12"> Adventure</option>
              <option value="35">Comedy</option>
            </select>
            <button className="apply">Apply</button>
          </form>
        </div>
      </div>
      <div className="trend-movie-cards">
        {allTvShows?.map((el) => {
          return (
            <TvCard key={el?.id}
            id={el?.id}
            image={movie_img(el?.poster_path)}
            name={
              el?.original_title === undefined ? el?.name : el?.original_title
            }
            vote={parseFloat(el?.vote_average.toFixed(1))}/>
          );
        })}
      </div>
    </div>
  );
};

export default TVshows;
