import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../../../pages/DetailPage/DetailPage.scss";

const SearchDetailPage = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const moviesId = +useParams().id;

  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  let movieName = JSON.parse(localStorage.getItem("movieName"));

  let findMovies = async () => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&query=${movieName}&page=1&include_adult=false`
    );
    let data = res?.data?.results;
    setSearchedMovies(data);
  };

  useEffect(() => {
    findMovies();
  }, []);

  useEffect(() => {
    setSelectedMovie(searchedMovies.find((item) => item.id === moviesId));
  }, [searchedMovies, moviesId]);
  // console.log(selectedMovie);

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img
          className="detail-img"
          src={movie_img(selectedMovie?.poster_path)}
          alt=""
        />
        <div className="detail-info">
          <div className="movie-name">
            {selectedMovie?.title === undefined
              ? selectedMovie?.name
              : selectedMovie?.title}
          </div>
          <div className="rating">
            <b>IMDb Rating : </b> {selectedMovie?.vote_average?.toFixed(1)}
            <svg
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              className="ipc-icon ipc-icon--star-inline star-svg"
              id="iconContext-star-inline"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
            </svg>
          </div>
          <div className="about-movie">{selectedMovie?.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchDetailPage;
