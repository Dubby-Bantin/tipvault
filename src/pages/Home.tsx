import { useEffect } from "react";
import {
  Banner,
  Featured,
  Categories,
  LatestTips,
  saveTips,
} from "../utils/exports";
import { tips } from "../utils/tips";

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
