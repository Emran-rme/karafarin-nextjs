import { useSelector } from "react-redux";
import { isEmpty } from "loadsh";

import singlePageStyles from "../../../../styles/SinglePage.module.css";
import PageDescription from "../../common/singlePage/PageDescription";
import PageVideo from "../../common/singlePage/PageVideo";
import PageFaq from "../../common/singlePage/PageFaq";
import PageRelated from "../../common/singlePage/PageRelated";
import PageComment from "../../common/singlePage/PageComment";
import CourseInfoBox from "../../common/CourseInfoBox";

export default function SinglePage({ data }) {
  const singlePageInfo = useSelector((state) => state.singlePage);
  const pages = useSelector((state) => state.pages);
  const commentsList = useSelector((state) => state.comments);
  const loadingStatus = useSelector((state) => state.loading);

  const filteredPage = pages.filter((page) => page.id !== singlePageInfo.id);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-4 gap-x-0">
      <div className="col-span-2 p-4">
        <div className={singlePageStyles.courseSingleMain}>
          <PageDescription styles={singlePageStyles} data={data} mode="page" />
          {/* <PageFaq styles={singlePageStyles} /> */}
          {/* <PageVideo styles={singlePageStyles} /> */}
          <PageRelated
            styles={singlePageStyles}
            title="آخرین اخبار صنعت بیمه"
            data={filteredPage}
          />
          {!isEmpty(singlePageInfo.plugin_list) &&
            singlePageInfo.plugin_list.split(",").includes("Comments") && (
              <PageComment
                styles={singlePageStyles}
                data={commentsList}
                pageId={singlePageInfo.id}
                loading={loadingStatus}
              />
            )}
        </div>
      </div>
      <div className="py-4 px-0 ">
        <div className={singlePageStyles.courseSingleAside}>
          {/* <CourseInfoBox styles={singlePageStyles}>
            <div className={singlePageStyles.sellCourse}>
              <strong>قیمت :</strong>
              <p className={singlePageStyles.price}>
                <del aria-hidden="true">
                  <span className={singlePageStyles.amount}>
                    269,000&nbsp;
                    <span>تومان</span>
                  </span>
                </del>{" "}
                <ins>
                  <span className={singlePageStyles.amount}>
                    108,000&nbsp;
                    <span className={singlePageStyles.PriceCurrencySymbol}>
                      تومان
                    </span>
                  </span>
                </ins>
              </p>
            </div>
            <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded w-full flex items-center justify-between">
              <span className="mdi mdi-credit-card-check-outline mdi-24px" />
              <span className="text-center">ثبت نام دوره</span>
              <span />
            </button>
          </CourseInfoBox>
          <CourseInfoBox styles={singlePageStyles}>
            <div className={singlePageStyles.courseMetaInfoList}>
              <div className={singlePageStyles.totalSales}>
                <span className="mdi mdi-download-outline mdi-24px " />
                تعداد خرید / دانلود : <span>481</span>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-sitemap-outline" />
                </div>
                <div className={singlePageStyles.value}>
                  نوع دوره: غیرحضوری،ویدئویی
                </div>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-book-open-page-variant-outline" />
                </div>
                <div className={singlePageStyles.value}>
                  سطح دوره: مقدماتی تا پیشرفته
                </div>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-head-lightbulb-outline" />
                </div>
                <div className={singlePageStyles.value}>
                  پیش نیاز: html و css
                </div>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-earth" />
                </div>
                <div className={singlePageStyles.value}>زبان: فارسی</div>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-clock-outline" />
                </div>
                <div className={singlePageStyles.value}>27ساعت و 21 دقیقه</div>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-format-list-numbered" />
                </div>
                <div className={singlePageStyles.value}>206 درس</div>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-sd" />
                </div>
                <div className={singlePageStyles.value}> 4.61 گیگابایت</div>
              </div>

              <div className={singlePageStyles.metaInfoUnit}>
                <div className={singlePageStyles.icon}>
                  <span className="mdi mdi-cloud-download-outline" />
                </div>
                <div className={singlePageStyles.value}>
                  روش دریافت: دانلودی
                </div>
              </div>
            </div>
            <div className={singlePageStyles.progressTitle}>
              <div className="flex">
                <span className="mdi mdi-format-list-checks mdi-24px" />
                <span className="mr-3"> درصد پیشرفت دوره: %100</span>
              </div>
              <div
                className={
                  singlePageStyles.meter + " " + singlePageStyles.animate
                }
              >
                <span style={{ width: "100%" }}>
                  <span></span>
                </span>
              </div>
            </div>
          </CourseInfoBox> */}

          {!isEmpty(singlePageInfo.plugin_list) &&
            singlePageInfo.plugin_list
              ?.split(",")
              .map(
                (item, index) =>
                  item !== "Comments" &&
                  singlePageInfo.get_module?.find(
                    (findItem) =>
                      findItem.module_type.toString() === item &&
                      findItem.module_status
                  ) && (
                    <CourseInfoBox
                      key={index}
                      styles={singlePageStyles}
                      item={item}
                      data={singlePageInfo}
                    />
                  )
              )}
        </div>
      </div>
    </div>
  );
}
