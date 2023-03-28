import NextImage from "next/image";
import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CsButton, { CsButtonType } from "./CsButton";

const slides = [
  { image: "/images/photography-0.png" },
  { image: "/images/photography-1.png" },
];

export default function CsSlider() {
  const ref = useRef<Slider>(null);
  const [slideNumber, setSlideNumber] = useState(1);

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
    beforeChange: (_, newIndex) => setSlideNumber(newIndex + 1),
  };

  const handlePreviousSlide = () => {
    if (ref && ref.current) {
      ref.current?.slickPrev();
    }
  };
  const handleNextSlide = () => {
    if (ref && ref.current) {
      ref.current?.slickNext();
    }
  };

  return (
    <>
      <Slider {...settings} ref={ref}>
        {slides.map((slide) => (
          <div key={slide.image}>
            <NextImage width={400} height={800} src={slide.image} alt="" />
          </div>
        ))}
      </Slider>
      <div className="px-5 pt-5 flex justify-between">
        <CsButton
          className="hover:bg-white"
          type={CsButtonType.Secondary}
          onClick={handlePreviousSlide}
        >
          <NextImage
            src={"/svgs/ArrowLeftBlack.svg"}
            alt={"arrow-left"}
            width={15.25}
            height={15.25}
          />
        </CsButton>
        <div className="flex items-center text-lg font-lato-light">
          {slideNumber} / {slides.length}
        </div>
        <CsButton
          className="hover:bg-white"
          type={CsButtonType.Secondary}
          onClick={handleNextSlide}
        >
          <NextImage
            src={"/svgs/ArrowRightBlack.svg"}
            alt={"arrow-right"}
            width={15.25}
            height={15.25}
          />
        </CsButton>
      </div>
    </>
  );
}
