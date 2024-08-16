import { Boxes } from "../utils/Boxes";
import { TextGenerateEffect } from "../utils/text-generate";

const Banner = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative text-white text-center flex flex-col items-center justify-center rounded-lg gap-5 z-20 px-4 md:px-8 lg:px-16 py-5 md:py-8 lg:py-16">
        <TextGenerateEffect
          className="text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold w-full md:w-[70%] font-heading"
          words="Discover, share, and enhance your coding skills effortlessly."
        />
        <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] text-gray-500 w-full md:w-[50%] font-text">
          A comprehensive platform packed with programming tips, categorized by
          <span className="text-primary"> language</span>, and searchable by
          keywords and tags, all designed to help you solve{" "}
          <span className="text-primary">coding</span> challenges and level up
          your development knowledge—directly in your{" "}
          <span className="text-primary">browser</span>.
        </p>
        <button className="py-2 px-4 md:px-5 bg-primary rounded-md font-semibold text-[0.8rem] md:text-[0.9rem]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
