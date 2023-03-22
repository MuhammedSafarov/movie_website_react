import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./DetailPage.scss";
import DetailCard from "./components/DetailCard";

const DiscoverDetailPage = () => {
  let moviesId = +useParams().id;

  const [selectedMovie, setSelectedMovie] = useState([]);
  const [discoveredMovie, setDiscoveredMovie] = useState([]);

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  const discoverMovies = async () => {
    let res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    );
    let data = res?.data?.results;
    setDiscoveredMovie(data);
  };

 

  useEffect(() => {
    discoverMovies();
  }, []);

  useEffect(() => {
    setSelectedMovie(discoveredMovie.find((item) => item.id === moviesId));
  }, [discoveredMovie, moviesId]);

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

export default DiscoverDetailPage;
