import CsButton, { CsButtonType } from "@/components/CsButton";
import CsContact from "@/components/CsContact";
import CsFooter from "@/components/CsFooter";
import CsSection from "@/components/CsSection";
import CsSlider from "@/components/CsSlider";
import CsText from "@/components/CsText";
import Header from "@/components/Header";
import NextImage from "next/image";
import NextLink from "next/link";

const IMAGE_HEIGHT_FACTOR = 1.5;
const SLIDES = [
  { image: "/images/photography-0.png" },
  { image: "/images/photography-1.png" },
  { image: "/images/photography-2.png" },
];

export default function Home() {
  return (
    <>
      <Header />
      {/* First section */}
      <CsSection className="pt-20 md:flex-row-reverse">
        <NextImage
          src={"/images/chris-profile.png"}
          alt={"chris-profile"}
          width={700}
          height={700}
        />
        <div className="md:w-1/2 md:mr-20">
          <h1 className="mt-7 text-5xl font-anton-regular md:text-8xl">
            Chris K. Seidel
          </h1>
          <h2 className="mt-4 text-xl font-lato-light">
            UI / UX Designer for Apps with purpose
          </h2>
          <CsText>
            Hi, I’m Chris. For the last few years, I’ve worked as a UI / UX
            Designer, Concepter, and Head of Product for the top Mental Health &
            Physical Health Apps on the German market. I&apos;m always open to
            interesting freelance projects and open to giving advice.
          </CsText>
          <div className="mt-5 flex space-x-4">
            <CsButton>
              About Me
              <NextImage
                className="ml-3.5"
                src={"/svgs/ArrowRightWhite.svg"}
                alt={"chris-profile"}
                width={15.25}
                height={15.25}
              />
            </CsButton>
            <CsButton type={CsButtonType.Secondary}>Resume</CsButton>
          </div>
        </div>
      </CsSection>
      {/* Mindshine section */}
      <CsSection className="border-t-0.75 border-black">
        <NextImage
          className="mr-20"
          src={"/images/mindshine-cover.png"}
          alt={"mindshine-cover"}
          width={700}
          height={700}
        />
        <div className="sm:w-1/2 md:w-1/3">
          <h1 className="mt-7 text-5xl font-anton-regular">Mindshine</h1>
          <h2 className="mt-4 text-xl font-lato-light">
            Head of Product, UI / UX Designer
          </h2>
          <CsText>
            I was responsible for the redesign of the app, concepting, designing
            and managing the development of new features, as well as doing user
            testing and leading a team of up to 6 developers.
          </CsText>
          <div className="mt-5 flex space-x-4">
            <CsButton>
              Read more
              <NextImage
                className="ml-3.5"
                src={"/svgs/ArrowRightWhite.svg"}
                alt={"chris-profile"}
                width={15.25}
                height={15.25}
              />
            </CsButton>
            <CsButton type={CsButtonType.Secondary}>Get the App</CsButton>
          </div>
        </div>
      </CsSection>
      {/* Photograpy section */}
      <CsSection className="border-t-0.75 border-black md:flex-row-reverse">
        <CsSlider
          slidesToScroll={2}
          slidesToShow={2}
          className="md:w-2/3"
          slidesCount={SLIDES.length}
        >
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
        </CsSlider>
        <div className="md:mr-20">
          <h1 className="mt-7 text-5xl font-anton-regular">Photography</h1>
          <h2 className="mt-4 text-xl font-lato-light">
            Head of Product, UI / UX Designer
          </h2>
          <p className="text-base font-lato-light mt-4">
            I was responsible for the redesign of the app, concepting, designing
            and managing the development of new features, as well as doing user
            testing and leading a team of up to 6 developers.
          </p>
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
            <NextLink href={"/photography"}>
              <CsButton type={CsButtonType.Secondary}>Portfolio</CsButton>
            </NextLink>
          </div>
        </div>
      </CsSection>

      <CsSection className="border-t-0.75 border-black">
        <div className="w-full">
          <h1 className="mt-7 text-5xl font-anton-regular">
            Let’s get in touch 👋{" "}
          </h1>
          <CsContact />
        </div>
      </CsSection>
      <CsFooter />
    </>
  );
}
