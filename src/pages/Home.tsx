import { useEffect } from "react";
import { Banner, Featured, Categories, LatestTips } from "../utils/exports";
import { tips } from "../utils/tips";
interface TipFormData {
  id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  created_at?: string; // Added optional created_at field
}
const saveTips = (tips: TipFormData[]) => {
  localStorage.setItem("tips", JSON.stringify(tips));
};

const Home = () => {
  useEffect(() => {
    saveTips(tips);
  });
  return (
    <div>
      <Banner />
      <Featured />
      <Categories />
      <LatestTips />
    </div>
  );
};

export default Home;
