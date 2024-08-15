import { Boxes } from "../utils/Boxes";
import { TextGenerateEffect } from "../utils/text-generate";

const Banner = () => {
  return (
    <div className=" h-96 relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative text-white  text-center  flex flex-col items-center justify-center rounded-lg  gap-5 z-20">
        <TextGenerateEffect
          className="text-[3.5rem]  font-bold w-[70%] font-heading"
          words=" Discover, share, and enhance your coding skills effortlessly."
        />
        <p className="text-[1.2rem]  text-gray-500 w-[50%] font-text">
          A comprehensive platform packed with programming tips, categorized by
          <span className="text-primary"> language</span>, and searchable by
          keywords and tags, all designed to help you solve{" "}
          <span className="text-primary">coding</span> challenges and level up
          your development knowledge—directly in your{" "}
          <span className="text-primary">browser</span>.
        </p>
        <button className="py-2 px-5  bg-primary rounded-md font-semibold text-[.8rem]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
