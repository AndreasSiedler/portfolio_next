import CsButton, { CsButtonType } from "@/components/CsButton";
import CsFooter from "@/components/CsFooter";
import CsSection from "@/components/CsSection";
import CsText from "@/components/CsText";
import Header from "@/components/Header";
import clsx from "clsx";
import NextImage from "next/image";

const IMAGES = [
  { image: "/images/photography-1.png" },
  { image: "/images/photography-3.png" },
  { image: "/images/photography-2.png" },
  { image: "/images/photography-4.png", className: "md:w-2/3" },
  { image: "/images/photography-5.png" },
  { image: "/images/photography-6.png" },
  { image: "/images/photography-7.png" },
  { image: "/images/photography-8.png" },
  { image: "/images/photography-9.png" },
  { image: "/images/photography-10.png" },
  { image: "/images/photography-11.png" },
  { image: "/images/photography-12.png" },
  { image: "/images/photography-13.png", className: "md:w-2/3" },
  { image: "/images/photography-14.png" },
  { image: "/images/photography-15.png" },
  { image: "/images/photography-16.png" },
];

export default function PhotographyPage() {
  return (
    <>
      <Header />
      {/* First section */}
      <CsSection className="pt-20">
        <div className="md:mr-20">
          <h1 className="mt-7 text-5xl font-anton-regular md:text-8xl">
            Photography
          </h1>

          <CsText className="mt-12">
            I&apos;m working as a UI / UX Designer, Concepter, as well as Head
            of Product top Apps on the german Mental Health & physical Health
            market with 500k+ users and over 4.8 appstore rating. I&apos;m
            always open for interesting freelance projects and open to give
            advice.
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
            <CsButton type={CsButtonType.Secondary}>Prices</CsButton>
          </div>
          <div className="flex flex-wrap -ml-3 -mr-3 gap-y-6 mt-20">
            {IMAGES.map((image) => (
              <NextImage
                className={clsx(
                  "w-full md:w-1/3 pr-3 pl-3 h-144 object-cover",
                  image.className
                )}
                key={image.image}
                width={420}
                height={420}
                src={image.image}
                alt=""
              />
            ))}
          </div>
        </div>
      </CsSection>
      {/* Mindshine section */}

      <CsFooter />
    </>
  );
}
