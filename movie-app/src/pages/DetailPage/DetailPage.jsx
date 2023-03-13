import React from "react";
import "./DetailPage.scss";

const DetailPage = () => {
  return (
    <div className="detail-container">
      <img
        className="detail-img"
        src="https://cdn.marvel.com/content/1x/soc-spider-man-shoot-anim.jpg"
        alt=""
      />
      <div className="detail-info">
        <h2 className="movie-name">Spider Man 2</h2>
        <div className="rating">Imdb Rating </div>
      </div>
    </div>
  );
};

export default DetailPage;
