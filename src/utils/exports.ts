import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import LatestTips from "../components/LatestTips";
// import TipCard from '../components/TipCard';
import pythonLogo from "../assets/4518857_python_icon.png";
import JavaImg from "../assets/4373217_java_logo_logos_icon.png";
import reactImg from "../assets/1174949_js_react js_logo_react_react native_icon.png";
import javascriptImg from "../assets/652581_code_command_develop_javascript_language_icon.png";
import c from "../assets/7564189_c_logo_plus plus_plus_+ +_icon.png";
import { Tip } from "./tips";

const saveTips = (tips: Tip[]) => {
  localStorage.setItem("tips", JSON.stringify(tips));
};

// Load tips from local storage or return an empty array if none exist
const loadTips = (): Tip[] => {
  const savedTips = localStorage.getItem("tips");
  return savedTips ? JSON.parse(savedTips) : [];
};

const getLanguageBadgeClass = (language: string) => {
  switch (language) {
    case "Python":
      return pythonLogo;
    case "JavaScript":
      return javascriptImg;
    case "Java":
      return JavaImg;
    case "C++":
      return c;
    case "React":
      return reactImg;
    default:
      return "bg-gray-500";
  }
};

const assignCategory = (tip: Tip): string => {
  const { language } = tip;

  if (language === "Python" || language === "Java" || language === "C++") {
    return "Data Science";
  }
  if (language === "JavaScript" || language === "React") {
    return "Frontend";
  }
  return "Miscellaneous";
};

export interface TipCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  language: string;
  created_at: string;
  category?: string; // Optional if category might be undefined
  getLanguageBadge: (language: string) => string; // Function type
  isNew: boolean;
}

export {
  Banner,
  Featured,
  Categories,
  LatestTips,
  getLanguageBadgeClass,
  assignCategory,
  saveTips,
  loadTips,
};
