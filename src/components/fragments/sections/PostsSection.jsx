import Link from "next/link";
import { useRef, useCallback } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

export default function PostsSection({ styles, data: section, uri }) {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const data = useSelector((state) => state.postSections);
  console.log(data);
  return (
    <section className="mb-32">
      <div className={styles.product}>
        <span className={styles.boxIcon}>
          <span className="mdi mdi-chevron-down mdi-24px z-10 mt-12" />
        </span>
        <div className="container mx-auto px-28 ">
          <div className="flex flex-wrap flex-row justify-between">
            <ul className="flex flex-row">
              <li className=" p-3 border-b  text-slate-200">جدیدترین</li>
              <li className=" p-3  text-slate-200">محبوبترین</li>
              <li className=" p-3  text-slate-200">پربازدیدترین</li>
            </ul>
            <div className="flex flex-row-reverse">
              <span
                className="mdi mdi-chevron-left text-slate-200 mdi-36px cursor-pointer hover:text-slate-400 "
                onClick={handlePrev}
              />
              <span
                className="mdi mdi-chevron-right text-slate-200 mdi-36px cursor-pointer hover:text-slate-400 "
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-20 relative -bottom-20 -mt-20">
          <Swiper
            ref={sliderRef}
            dir="rtl"
            effect={"coverflow"}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            className={styles.boxItem}
            centeredSlides={true}
          >
            {data.map((item) =>
              item[`${section.position}`]?.map((page, index) => (
                <SwiperSlide key={index} style={{ width: "430px" }}>
                  <div className=" h-72 bg-white rounded-3xl shadow-md p-8">
                    <div className="flex justify-between">
                      <div>
                        <div className="w-24 h-24 overflow-hidden rounded-full shadow-2xl">
                          <img
                            src={uri + page.thumbnail_image_url}
                            alt={page.page_title}
                            className="w-full h-full "
                          />
                        </div>
                      </div>
                      <div className="grow flex justify-between mr-7">
                        <div className="text-gray-500 flex flex-col text-sm">
                          <span className="mb-4">
                            <span className="mdi mdi-format-list-bulleted-square ml-2" />
                            <span>دسته بندی :</span>
                          </span>
                          <span>{page.get_category?.category_name}</span>
                        </div>
                        <div className="text-gray-500 flex flex-col text-sm">
                          <span className="mb-4">
                            <span className="mdi mdi-calendar ml-2" />
                            <span>تاریخ :</span>
                          </span>
                          <span>
                            {new Date(page.created_at).toLocaleDateString(
                              "fa-IR"
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 text-gray-500 ">
                      <span className="mdi mdi-chevron-left mdi-24px text-blue-600 hover:text-blue-700" />

                      <Link
                        href={`/${page.get_category?.category_slug}/${page.id}/${page.page_slug}`}
                      >
                        <a className="text-blue-600 hover:text-blue-700 font-bold text-base cursor-pointer">
                          {page.page_title}
                        </a>
                      </Link>
                    </div>
                    <div
                      className="flex p-4 bg-gray-100 border-t-4 rounded-xl text-sm leading-6"
                      role="alert"
                    >
                      {page.page_body
                        ?.replace(/(<([^>]+)>)/gi, "")
                        .replace(/\&nbsp;/g, " ")
                        .substring(0, 70) + "..."}
                      <div className="ml-3 text-sm font-medium text-gray-700 "></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
