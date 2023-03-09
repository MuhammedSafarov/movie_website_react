import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.scss";

const SlickSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider-p">
          <img
            _ngcontent-who-c75=""
            className="default-image"
            src="https://dyn1.heritagestatic.com/lf?set=path%5B1%2F0%2F5%2F9%2F1%2F10591649%5D&call=url%5Bfile%3Aproduct.chain%5D"
            title="slider1"
            alt="slider1"
          />
        </div>
        <div className="slider-p">
          <img
            _ngcontent-who-c75=""
            className="default-image"
            src="https://external-preview.redd.it/KyGjptvL22o3gtOip8JlAvgi1e5g7uzVyDTHzHbJeBQ.jpg?auto=webp&s=27bc01051ac7a56cc29de770fcddd2eb344edbf8"
            title="slider2"
            alt="slider2"
          />
        </div>
        <div className="slider-p">
          <img
            _ngcontent-who-c75=""
            className="default-image"
            src="http://images.fandango.com/images/fandangoblog/Gangster119-1LARGE.jpg"
            title="slider3"
            alt="slider3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
