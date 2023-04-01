import React, { useEffect } from "react";
import "../trendPage/TrendPage.scss";
import "../../components/CardDesign/Card.scss";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getActorsAsync } from "../../store/actions/actors";
import ActorCard from "./ActorCard";

const ActorsPage = () => {
  const dispatch = useDispatch();
  const { actors } = useSelector((state) => state.allActors);

  let profile_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  useEffect(() => {
    dispatch(getActorsAsync());
  }, [dispatch]);

  return (
    <div className="trend-page">
      <h2>TOP Actors</h2>
      <div className="content-header">
        <div className="navigation-map">
          <Link className="link" to="/">
            Home
          </Link>
          <AiOutlineDoubleRight className="navigation-icon" />{" "}
          <Link to="/actors" className="link">
            Actors
          </Link>
        </div>
        <div className="filter-params">
          <form>
            <select name="Gender" id="">
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female"> Female</option>
            </select>
            <button className="apply">Apply</button>
          </form>
        </div>
      </div>
      <div className="card-list">
        {actors?.map((el) => {
          return (
            // <TrendMovieCards
            //   key={el?.id}
            //   id={el?.id}
            // image={profile_img(el?.profile_path)}
            // name={el?.name}
            // vote={el?.popularity.toFixed(0)}
            // />
            <ActorCard
              key={el.id}
              id={el.id}
              image={profile_img(el?.profile_path)}
              name={el?.name}
              vote={el?.popularity.toFixed(0)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActorsPage;
