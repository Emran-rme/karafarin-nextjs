import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TeamSection({ styles, data, uri }) {
  return (
    <section className="container mx-auto sm:px-24 my-14 ">
      <div
        className={`flex justify-between bg-blue-800 border shadow-xl overflow-hidden rounded-2xl ${styles.customersImage}`}
      >
        <div className=" p-5 w-1/4 bg-blue-100 shadow-xl rounded-l-full flex justify-center items-center ">
          <h3 className="text-center font-bold text-gray-600 sm:text-3xl text-base  border-b-4 border-lime-800 py-4">
            {data.get_content?.title}
          </h3>
        </div>
        <div className="w-3/4 px-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            dir="rtl"
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.get_content?.get_content_files?.map((item) => (
              <SwiperSlide className="flex justify-center" key={item.id}>
                <div className="p-8 flex flex-col justify-center items-center">
                  <div className="rounded-full flex items-center justify-center h-40 w-40 bg-white overflow-hidden">
                    <img className="w-3/4" src={uri + item.image_url} />
                  </div>
                  <p className="mt-8 text-slate-200 font-body sm:text-xl text-base ">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
