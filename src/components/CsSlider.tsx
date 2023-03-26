import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CsSlider() {
  var settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    cssEase: "linear",
    rtl: true,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "20px",
  };
  return (
    <Slider {...settings}>
      <div className="pr-2.5">
        <img src="/images/photography-1.png" />
      </div>
      <div className="pr-2.5">
        <img src="/images/photography-0.png" />
      </div>
    </Slider>
  );
}
