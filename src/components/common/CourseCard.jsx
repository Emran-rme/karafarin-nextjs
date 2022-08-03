import Link from "next/link";

import cardStyles from "../../../styles/CourseCard.module.css";

export default function CourseCard() {
  return (
    <div className={`${cardStyles.courseItem} bg-white border border-gray-300`}>
      <div className={cardStyles.courseItem__header}>
        <Link href="/courses/125/متن-تستی-است">
          <a>
            <span
              className={`cursor-pointer ${cardStyles.courseItem__header_img}`}
            >
              <img
                src="https://d2ffcs5wrcif.cdn.shift8web.com/wp-content/uploads/react-1-400x229.jpg"
                alt=""
              />
            </span>
          </a>
        </Link>
        <div className={cardStyles.videoButton}>
          <Link href="/courses/125/متن-تستی-است">
            <a>
              <span className="mdi mdi-play-outline flex" />
            </a>
          </Link>
        </div>
        <div className={cardStyles.addToCartButton}>
          <span className="mdi mdi-cart-arrow-down flex justify-between items-center" />
        </div>
      </div>
      <div className={cardStyles.courseItem__body}>
        <div className={cardStyles.courseItem__body_main}>
          <h6>
            <Link href="/courses/125/متن-تستی-است">
              آموزش مقدماتی تا پیشرفته جاوا اسکریپت (javascript) – کاملا پروژه
              محور
            </Link>
          </h6>
          <div className={cardStyles.courseItem__description}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          </div>
        </div>
        <div className={cardStyles.courseItem__body_footer}>
          <div className={cardStyles.courseStudents}>
            <span className="mdi mdi-account-supervisor-outline" />
            <span>۲۰</span>
          </div>
          <div className={cardStyles.coursePrice}>
            <span className={cardStyles.price}>
              <del aria-hidden="true">
                <span>
                  <bdi>
                    ۵۰٫۰۰۰&nbsp;
                    <span>تومان</span>
                  </bdi>
                </span>
              </del>{" "}
              <ins>
                <span>
                  <bdi>
                    ۲۰٫۰۰۰&nbsp;
                    <span>تومان</span>
                  </bdi>
                </span>
              </ins>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
