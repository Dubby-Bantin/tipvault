import { Link } from "react-router-dom";

interface Tip {
  id: number;
  title: string;
  description: string;
  language: string;
  tags: string[];
  category?: string; // Make the category optional since we are assigning it dynamically
  created_at: string;
  getLanguageBadgeClass: (param: string) => string;
}

const TipCard = ({
  id,
  title,
  language,
  description,
  tags,
  created_at,
  category,
  getLanguageBadgeClass,
}: Tip) => {
  return (
    <div
      key={id}
      className="bg-slate-900 border border-opacity-10 border-primary relative p-4 rounded-lg shadow-lg w-[35rem]"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-blue-400 font-bold text-lg font-heading">
          {title}
        </h2>
        <img className="h-5" src={getLanguageBadgeClass(language)} alt="" />
      </div>
      <button className="bg-gray-700 text-gray-100 text-xs font-semibold inline-block py-1 px-2 rounded">
        {language}
      </button>
      <p className="text-gray-200 mt-2 font-text">
        {description.slice(0, 50)}...
        <Link className="text-xs text-primary" to={"/"}>
          read more
        </Link>
      </p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          {tags?.map((tag) => (
            <Link
              to={"/"}
              key={tag}
              className=" text-white cursor-pointer hover:text-primary text-xs font-semibold"
            >
              #{tag}
            </Link>
          ))}
        </div>
        <span className="text-gray-400 text-sm italic">{created_at}</span>
      </div>
      <div className="mt-2">
        <span className="text-gray-400 text-sm italic">
          Category: {category}
        </span>
      </div>
    </div>
  );
};

export default TipCard;
