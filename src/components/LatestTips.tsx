import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { tipsData } from "../utils";

const LatestTips = () => {
  return (
    <div className="py-20">
      <h1 className="text-center mb-10 text-[3rem] text-transparent font-bold bg-clip-text bg-gradient-to-r from-white from-40% via-sky-500 via-50% to-primary to-90%">
        Latest Tips
      </h1>
      <Swiper
        className="w-[100%] h-[300px] py-10"
        modules={[Autoplay, Pagination]}
        autoplay
        spaceBetween={100}
        pagination={{ type: "bullets", dynamicBullets: true }}
        direction="vertical"
        speed={800}
      >
        {tipsData.map(({ title, description, image }, index) => (
          <SwiperSlide key={index}>
            <div className="p-3 md:w-[60%] mx-auto">
              <div className="relative bg-slate-900 rounded-xl p-10">
                <div className="flex justify-between items-center mb-5">
                  <h1 className="font-heading text-xl text-primary font-bold">
                    {title}
                  </h1>
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full">
                      <img
                        src={image}
                        alt={`${title} icon`}
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white font-text">{description}</p>
                <div className="left-0 top-0 translate-y-[-10%] absolute w-[100%] h-[100%] flex justify-center -z-10">
                  <div className="border border-primary w-[70%] h-[120%] rounded-xl"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestTips;
