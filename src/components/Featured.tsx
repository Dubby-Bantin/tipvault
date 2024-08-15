import { Swiper, SwiperSlide } from "swiper/react";
import FeatureCard from "./FeatureCard";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Tip {
  id: number;
  title: string;
  description: string;
  language: string;
  tags: string[];
  created_at: string;
}
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
    <div className="py-20 mb-20">
      <h1 className="text-center mb-10 text-[3rem] text-transparent font-bold bg-clip-text bg-gradient-to-r from-white from-40% via-sky-500 via-50% to-primary to-90%">
        Featured Tips
      </h1>
      <div className="relative flex items-center justify-center mr-32 ml-52 mb-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay settings
          slidesPerView={3}
          spaceBetween={10} // Minimal space between slides
          centeredSlides={true}
          speed={800}
          loop
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1124: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {tips?.slice(0, 5).map((tip) => (
            <SwiperSlide key={tip?.title}>
              <FeatureCard key={tip?.id} {...tip} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        onClick={() => navigate("/tips")}
        className="py-2 px-5 bg-primary rounded-md font-semibold text-[.9rem] text-white float-end relative top-10 mx-10"
      >
        See More
      </button>
    </div>
  );
};

export default Featured;
