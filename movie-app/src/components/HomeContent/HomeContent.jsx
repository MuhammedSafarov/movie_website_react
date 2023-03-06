import React from "react";
import "./HomeContent.scss";

const HomeContent = () => {
  //   const fetchProducts = async () => {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/tv/popular?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&page=1"
  //     );
  //     console.log(data);
  //   };
  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  return (
    <div className="home-content">
      <div className="content-header">
        <div className="tick"></div>
        <div className="content-name">New Movies</div>
      </div>
      <div className="movie-cards">
        <div className="movie-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tNnqMFQf9D5OuQiQTKtHJx8dxAlF4iX8LYpQyzw1AAMq9YLl"
            alt=""
          />
          <div className="movie-name">Spider Man</div>
          <div className="movie-genre">Action</div>
        </div>
        <div className="movie-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tNnqMFQf9D5OuQiQTKtHJx8dxAlF4iX8LYpQyzw1AAMq9YLl"
            alt=""
          />
          <div className="movie-name">Spider Man</div>
          <div className="movie-genre">Action</div>
        </div>
        <div className="movie-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tNnqMFQf9D5OuQiQTKtHJx8dxAlF4iX8LYpQyzw1AAMq9YLl"
            alt=""
          />
          <div className="movie-name">Spider Man</div>
          <div className="movie-genre">Action</div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
