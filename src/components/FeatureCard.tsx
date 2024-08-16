// import { useEffect, useState } from "react";
import pythonLogo from "../assets/4518857_python_icon.png";
import { Tip } from "../utils/tips";


const FeatureCard = ({
  id,
  title,
  description,
  language,
  tags,
  created_at,
  isNew,
}: Tip) => (
  <div
    key={id}
    className="bg-slate-900 relative p-10 rounded-lg shadow-lg w-[40rem]"
  >
    {isNew && (
      <span className="absolute bottom-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
        New
      </span>
    )}
    <div className="flex justify-between items-center">
      <h2 className="text-blue-400 font-bold text-lg font-heading">{title}.</h2>
      <img className="h-5" src={pythonLogo} alt="" />
    </div>
    <button className="bg-gray-700 text-gray-100 text-xs font-semibold inline-block py-1 px-2 rounded">
      {language}
    </button>
    <p className="text-gray-200 mt-2 font-text">{description}</p>
    <div className="flex justify-between items-center mt-4">
      <div className="flex gap-4">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className=" text-white cursor-pointer hover:text-primary text-[.6rem] font-semibold "
          >
            #{tag}
          </span>
        ))}
      </div>
      <span className="text-gray-400 text-sm italic">{created_at}</span>
    </div>
  </div>
);

export default FeatureCard;
