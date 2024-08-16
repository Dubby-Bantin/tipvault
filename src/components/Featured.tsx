import { Swiper, SwiperSlide } from "swiper/react";
import FeatureCard from "./FeatureCard";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tip } from "../utils/exports";
import { isNewTip } from "../utils/IsNewTip";

const Featured = () => {
  const navigate = useNavigate();
  const { getData, data } = useFetch();
  const [tips, setTips] = useState<Tip[]>([]);

  useEffect(() => {
    getData("/tips");
  }, [getData, data]);

  useEffect(() => {
    setTips(data);
  }, [data]);

  return (
    <div className="py-20 mb-20 w-full flex flex-col items-center">
      <h1 className="text-center mb-10 text-[2rem] md:text-[3rem] text-transparent font-bold bg-clip-text bg-gradient-to-r from-white from-40% via-sky-500 via-50% to-primary to-90%">
        Featured Tips
      </h1>
      <div className="relative w-full max-w-2xl ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={6}
          centeredSlides={true}
          speed={800}
          loop
          className="w-full"
        >
          {tips?.slice(0, 5).map((tip) => (
            <SwiperSlide key={tip?.title}>
              <FeatureCard
                key={tip?.id}
                {...tip}
                isNew={isNewTip(tip.created_at)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        onClick={() => navigate("/tips")}
        className="py-2 px-5 bg-primary rounded-md font-semibold text-[.9rem] text-white mt-10"
      >
        See More
      </button>
    </div>
  );
};

export default Featured;