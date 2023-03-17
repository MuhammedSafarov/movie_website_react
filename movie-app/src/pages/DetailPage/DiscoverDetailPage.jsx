import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./DetailPage.scss";
import DetailCard from "./components/DetailCard";

const DiscoverDetailPage = () => {
  let moviesId = +useParams().id;

  const [selectedMovie, setSelectedMovie] = useState([]);
  const [discoveredMovie, setDiscoveredMovie] = useState([]);

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

  // discoveredMovie.forEach((el) => {
  //   el.id === moviesId ? setSelectedMovie(el) ;
  // });

  for (let i = 0; i < discoveredMovie.length; i++) {
    if (discoveredMovie[i].id === moviesId) {
      setSelectedMovie(discoveredMovie[i]);
      console.log(selectedMovie);
    }
  }

  // setSelectedMovie(discoveredMovie.find((movie) => movie.id === moviesId));
  // console.log(selectedMovie);

  return (
    <div className="detail-container">
      <DetailCard />
    </div>
  );
};

export default DiscoverDetailPage;
