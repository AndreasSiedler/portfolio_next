import NextImage from "next/image";
import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CsButton, { CsButtonType } from "./CsButton";

const IMAGE_HEIGHT_FACTOR = 1.5;
const SLIDES_TO_SCROLL = 2;
const SLIDES_TO_SHOW = 2;
const SLIDES = [
  { image: "/images/photography-0.png" },
  { image: "/images/photography-1.png" },
  { image: "/images/photography-2.png" },
];

type CsSliderProps = {
  className?: string;
};

export default function CsSlider({ className }: CsSliderProps) {
  const ref = useRef<Slider>(null);
  const [slideNumber, setSlideNumber] = useState(1);

  var settings: Settings = {
    infinite: false,
    // centerMode: true,
    // centerPadding: "0px",
    // speed: 500,
    slidesToShow: SLIDES_TO_SHOW,
    slidesToScroll: SLIDES_TO_SCROLL,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (_, newIndex) => {
      return setSlideNumber(newIndex + 1);
    },
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
    <div className={className}>
      <Slider {...settings} ref={ref}>
        {SLIDES.map((slide) => (
          <div key={slide.image}>
            <NextImage
              width={420}
              height={420 * IMAGE_HEIGHT_FACTOR}
              src={slide.image}
              alt=""
            />
          </div>
        ))}
      </Slider>
      <div className="pt-5 flex justify-between">
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
          {slideNumber} / {Math.ceil(SLIDES.length / SLIDES_TO_SCROLL)}
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
    </div>
  );
}
