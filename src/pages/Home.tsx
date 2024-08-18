import { useEffect } from "react";
import { Banner, Featured, Categories, LatestTips } from "../utils/exports";
import { Tip, tips } from "../utils/tips";

const saveTips = (tips: Tip[]) => {
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
