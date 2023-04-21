import CsButton, { CsButtonType } from "@/components/CsButton";
import CsFooter from "@/components/CsFooter";
import CsSection from "@/components/CsSection";
import CsSlider from "@/components/CsSlider";
import CsText from "@/components/CsText";
import Header from "@/components/Header";
import clsx from "clsx";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const IMAGE_HEIGHT_FACTOR = 1.5;
const SLIDES = [
  { image: "/images/photography-0.png" },
  { image: "/images/photography-1.png" },
  { image: "/images/photography-2.png" },
];

export default function PhotographyProjectPage() {
  const [activeImage, setActiveImage] = useState(SLIDES[0].image);

  return (
    <>
      <Header />
      {/* First section */}
      <CsSection className="pt-20 md:items-stretch">
        <NextImage
          className={clsx("w-full pr-20 pl-3 object-cover cursor-pointer")}
          width={576}
          height={864}
          src={activeImage}
          alt=""
        />
        <div className="flex-cols justify-between">
          <div className="md:mr-20 self-end">
            <h1 className="mt-7 text-5xl font-anton-regular">Project name</h1>
            <h2 className="mt-4 text-xl font-lato-light">
              Head of Product, UI / UX Designer
            </h2>
            <CsText>
              I was responsible for the redesign of the app, concepting,
              designing and managing the development of new features, as well as
              doing user testing and leading a team of up to 6 developers.
            </CsText>
            <div className="mt-5 flex space-x-4">
              <CsButton>
                Book a shooting
                <NextImage
                  className="ml-3.5"
                  src={"/svgs/ArrowRightWhite.svg"}
                  alt={"chris-profile"}
                  width={15.25}
                  height={15.25}
                />
              </CsButton>
            </div>
          </div>
          <CsSlider className="md:w-2/3" slidesCount={SLIDES.length}>
            {SLIDES.map((slide) => (
              <div
                key={slide.image}
                className="cursor-pointer"
                onClick={() => setActiveImage(slide.image)}
              >
                <NextImage
                  width={134.5}
                  height={201 * IMAGE_HEIGHT_FACTOR}
                  src={slide.image}
                  alt=""
                />
              </div>
            ))}
          </CsSlider>{" "}
        </div>
      </CsSection>
      {/* Mindshine section */}

      <CsFooter />
    </>
  );
}
