import Header from "@/components/Header";
import NextImage from "next/image";
import HiArrowRight from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl px-5 pb-10">
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
      </div>
      <div className="mx-auto max-w-6xl px-5 pt-10 border-t-0.75 border-black pb-10">
        <NextImage
          src={"/images/mindshine-cover.png"}
          alt={"mindshine-cover"}
          width={700}
          height={700}
        />
        <h1 className="mt-7 text-5xl font-anton-regular">Mindshine</h1>
        <h2 className="mt-4 text-xl font-lato-light">
          Head of Product, UI / UX Designer
        </h2>
        <p className="text-base font-lato-light mt-4">
          I was responsible for the redesign of the app, concepting, designing
          and managing the development of new features, as well as doing user
          testing and leading a team of up to 6 developers.
        </p>
        <div className="mt-5 flex space-x-4">
          <button className="text-base text-white font-anton-regular px-5 py-2.5 bg-black hover:bg-neutral-800 flex justify-center items-center">
            Read more
            <NextImage
              className="ml-3.5"
              src={"/svgs/ArrowRightWhite.svg"}
              alt={"chris-profile"}
              width={15.25}
              height={15.25}
            />
          </button>
          <button className="text-base text-black hover:text-white font-anton-regular px-5 py-2.5 border-black border-2 hover:bg-black ">
            Get the App
          </button>
        </div>
      </div>
    </>
  );
}
