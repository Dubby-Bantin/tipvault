// tips.tsx
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SkeletonCards from "../components/Skeleton";
import TipCard from "../components/TipCard";
import {
  assignCategory,
  getLanguageBadgeClass,
  loadTips,
} from "../utils/exports";
import { isNewTip } from "../utils/IsNewTip";
import { Tip } from "../utils/tips"; // Import the Tip type

const Tips = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [displayedTips, setDisplayedTips] = useState<Tip[]>([]);

  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const prev = () => {
    if (start > 0) {
      setStart((s) => s - 5);
      setEnd((e) => e - 5);
    }
  };

  const next = () => {
    if (end < displayedTips.length) {
      setStart((s) => s + 5);
      setEnd((e) => e + 5);
    }
  };

  useEffect(() => {
    // Load tips from local storage
    const tips = loadTips();

    const categorizedTips = tips.map((tip) => ({
      ...tip,
      category: assignCategory(tip),
      getLanguageBadge: (language: string) => getLanguageBadgeClass(language),
    }));

    setDisplayedTips(categorizedTips);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const filteredTips = displayedTips
    .filter(
      (tip) =>
        tip.title.toLowerCase().includes(search.trim().toLowerCase()) ||
        tip.language.toLowerCase().includes(search.trim().toLowerCase())
    )
    .filter(
      (tip) =>
        (selectedCategory === "" ||
          tip.category
            ?.toLowerCase()
            .includes(selectedCategory.toLowerCase())) &&
        (selectedLanguage === "" ||
          tip.language.toLowerCase().includes(selectedLanguage.toLowerCase()))
    );

  return (
    <div className="">
      <div className="flex flex-col justify-center gap-10 p-6">
        <div className="relative block">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tips..."
            className="bg-transparent border-b border-primary outline-none float-right text-white p-2 w-full max-w-sm focus:max-w-md transition-all duration-1000 mx-auto"
          />
          <BiSearch className="text-white absolute top-3 right-2" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-900 text-white p-2 rounded-lg border border-slate-700 focus:border-primary"
          >
            <option value="">Filter by Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Data Science">Data Science</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-slate-900 text-white p-2 rounded-lg border border-slate-700 focus:border-primary"
          >
            <option value="">Filter by Language</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="React">React</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {isLoading ? (
            <SkeletonCards cards={8} />
          ) : (
            filteredTips
              ?.slice(start, end)
              ?.map((filteredTip) => (
                <TipCard
                  id={filteredTip.id}
                  key={filteredTip.id}
                  category={filteredTip.category}
                  title={filteredTip.title}
                  description={filteredTip.description}
                  tags={filteredTip.tags}
                  language={filteredTip.language}
                  created_at={filteredTip.created_at}
                  isNew={isNewTip(filteredTip.created_at)}
                  getLanguageBadge={getLanguageBadgeClass}
                />
              ))
          )}
        </div>
        <div className="flex justify-center gap-10 items-center mt-6">
          <button
            className="p-3 w-12 border border-primary hover:bg-primary transition-all duration-300 text-white"
            onClick={prev}
          >
            <BsArrowLeft />
          </button>
          <button
            className="p-3 w-12 border border-primary hover:bg-primary transition-all duration-300 text-white"
            onClick={next}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <Link
          to={"/create"}
          className="py-2 px-5 text-white bg-primary hover:bg-primary/75 rounded-md font-semibold text-[.8rem]"
        >
          Submit a New Tip
        </Link>
      </div>
    </div>
  );
};

export default Tips;
