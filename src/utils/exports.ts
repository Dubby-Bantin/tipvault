import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import LatestTips from "../components/LatestTips";
// import TipCard from '../components/TipCard';
export interface Tip {
  id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  category?: string; // Make the category optional since we are assigning it dynamically
  created_at: string;
  isNew: boolean;
  getLanguageBadge: (param: string) => string;
}
export { Banner, Featured, Categories, LatestTips };
