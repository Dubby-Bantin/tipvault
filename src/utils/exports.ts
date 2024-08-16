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
export interface Tip {
  id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  category: string; // Make the category optional since we are assigning it dynamically
  created_at: string;
  isNew: boolean;
  getLanguageBadge: (param: string) => string;
}
export { Banner, Featured, Categories, LatestTips, getLanguageBadgeClass };
