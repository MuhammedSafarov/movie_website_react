import React from "react";

const MovieCards = ({ popularMovies }) => {
  let movie_img = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  return (
    <div className="movie-cards">
      {popularMovies?.map((movie) => {
        return (
          <div key={movie?.id} className="movie-card">
            <img src={movie_img(movie?.poster_path)} alt={movie?.name} />
            <div className="movie-name">{movie?.name}</div>
            <div className="movie-genre">{movie?.first_air_date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCards;
