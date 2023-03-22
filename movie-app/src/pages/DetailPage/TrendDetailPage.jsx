import React, { useEffect, useState } from "react";
import DetailCard from "./components/DetailCard";
import "./DetailPage.scss";
import { useParams } from "react-router";
import axios from "axios";

const DetailPage = () => {
  let moviesId = +useParams().id;
  const [trendMovies, setTrendMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  const trendingMovies = async () => {
    let res = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=d448aa11b683dfdce0641c3887f9a164"
    );
    let data = res?.data?.results;
    setTrendMovies(data);
  };

  useEffect(() => {
    trendingMovies();
  }, []);

  useEffect(() => {
    setSelectedMovie(trendMovies.find((item) => item.id === moviesId));
  }, [trendMovies, moviesId]);

  return (
    <div className="detail-container">
      <DetailCard
        img={movie_img(selectedMovie?.poster_path)}
        name={
          selectedMovie?.title === undefined
            ? selectedMovie?.name
            : selectedMovie?.title
        }
        about={selectedMovie?.overview}
        star={selectedMovie?.vote_average?.toFixed(1)}
      />
    </div>
  );
};

export default DetailPage;
