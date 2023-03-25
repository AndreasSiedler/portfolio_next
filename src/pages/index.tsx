import Header from "@/components/Header";
import NextImage from "next/image";
import HiArrowRight from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl px-5">
        <NextImage
          src={"/images/chris-profile.png"}
          alt={"chris-profile"}
          width={700}
          height={700}
        />
        <h1 className="mt-7 text-5xl font-anton-regular">Chris K. Seidel</h1>
        <h2 className="mt-4 text-xl font-lato-light">
          UI / UX Designer for Apps with purpose
        </h2>
        <p className="text-base font-lato-light mt-4">
          I&apos;m working as a UI / UX Designer, Concepter, as well as Head of
          Product top Apps on the german Mental Health & physical Health market
          with 500k+ users and over 4.8 appstore rating. I&apos;m always open
          for interesting freelance projects and open to give advice.
        </p>
        <div className="mt-5 flex space-x-4">
          <button className="text-base text-white font-anton-regular px-5 py-2.5 bg-black hover:bg-neutral-800 flex justify-center items-center">
            About Me
            <NextImage
              className="ml-3.5"
              src={"/svgs/ArrowRightWhite.svg"}
              alt={"chris-profile"}
              width={15.25}
              height={15.25}
            />
          </button>
          <button className="text-base text-black hover:text-white font-anton-regular px-5 py-2.5 border-black border-2 hover:bg-black ">
            Resume
          </button>
        </div>
        {/* <div className="mt-6 border-black border-2 px-16 py-4 flex justify-between items-center">
          <h1 className="text-base font-robotomono-semibold">
            Chris K. Seidel
          </h1>
          <button className="bg-black hover:bg-neutral-800 text-white font-robotomono-semibold py-4 px-12 flex items-center">
            Contact Me
            <HiArrowRight className="ml-2" color="#ffffff" />
          </button>
        </div> */}

        {/* <div className="grid lg:grid-cols-2 mt-6 border-black border-2 p-16">
        <div className="flex flex-col justify-center">
          <h1 className="mt-2 text-4xl font-robotomono-semibold tracking-tight text-gray-900">
            Chris K. Seidel
          </h1>
          <h2 className="mt-6 text-xl font-robotomono-regular tracking-tight text-gray-900 sm:text-xl">
            UI / UX Designer for Apps with purpose ♥️
          </h2>
          <p className="text-base font-robotomono-regular mt-4">
            I&apos;m working as a UI / UX Designer, Concepter, as well as Head
            of Product top Apps on the german Mental Health & physical Health
            market with 500k+ users and over 4.8 appstore rating. I&apos;m
            always open for interesting freelance projects and open to give
            advice.
          </p>
          <div className="mt-10 flex space-x-4">
            <button className="bg-black hover:bg-neutral-800 text-white font-robotomono-semibold py-4 px-12 flex items-center">
              Design
              <HiArrowRight className="ml-2" color="#ffffff" />
            </button>
            <button className="border-black border-2 hover:bg-black text-black hover:text-white font-robotomono-semibold py-4 px-12 flex items-center">
              Photography
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-auto h-auto bg-yellow-400 rounded-full mx-12">
            <NextImage
              src={"/images/chris-profile.png"}
              alt={"chris-profile"}
              width={700}
              height={700}
            />
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
