import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css/pagination";

export default function SlidersSection({ sliders, uri }) {
  return (
    <section className="-z-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id} className="px-10 flex justify-center">
            {slider.link ? (
              <Link href={`${slider.link}`} passHref>
                <a target="_blank" rel="noreferrer">
                  <img
                    src={uri + slider.image_url}
                    alt={`کارافرین-${slider.id}`}
                  />
                </a>
              </Link>
            ) : (
              <img src={uri + slider.image_url} alt={`کارافرین-${slider.id}`} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
