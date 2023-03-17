import React, { useEffect, useState } from "react";
import DetailCard from "./components/DetailCard";
import "./DetailPage.scss";
import { useParams } from "react-router";
import axios from "axios";

const DetailPage = () => {
  let moviesId = useParams().id;
  const [trendMovies, setTrendMovies] = useState([]);

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

  useEffect(() => {
    trendingMovies();
  }, []);

  return (
    <div className="detail-container">
      <DetailCard />
    </div>
  );
};

export default DetailPage;
