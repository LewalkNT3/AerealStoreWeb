import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderADImages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="overflow-hidden pointer-events-none">
      <Slider {...settings}>
        <div className="">
          <img
            className="w-full"
            src="../public/merca-1.webp"
            alt="imagen 1 merca"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="../public/merca-2.webp"
            alt="imgen 2 merca"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="../public/Merca-3.webp"
            alt="imagen 3 merca"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="../public/merca-4.webp"
            alt="imagen 4 merca"
          />
        </div>
      </Slider>
    </div>
  );
}
