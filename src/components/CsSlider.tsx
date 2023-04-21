import NextImage from "next/image";
import { ReactNode, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CsButton, { CsButtonType } from "./CsButton";

type CsSliderProps = {
  slidesToShow: number;
  slidesToScroll: number;
  slidesCount: number;
  className?: string;
  children: ReactNode;
};

export default function CsSlider({
  slidesToShow,
  slidesToScroll,
  slidesCount,
  className,
  children,
}: CsSliderProps) {
  const ref = useRef<Slider>(null);
  const [slideNumber, setSlideNumber] = useState(1);

  var settings: Settings = {
    infinite: false,
    // centerMode: true,
    // centerPadding: "0px",
    // speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
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
        {children}
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
          {slideNumber} / {Math.ceil(slidesCount / slidesToScroll)}
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
