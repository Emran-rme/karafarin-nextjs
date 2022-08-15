import Link from "next/link";
import { useState } from "react";

export default function PageDescription({ styles, data, mode }) {
  const [showDescription, setShowDescription] = useState(false);

  const createMarkup = () => {
    return { __html: data.page?.page_body };
  };
  return (
    <div className={styles.courseSingleContent}>
      <div className="bg-blue-50 border-r-4 rounded-l-md border-blue-200 text-gray-500 p-4 mb-8">
        <h1 className="text-xl font-bold">{data.page?.page_title}</h1>
      </div>
      <div className={styles.courseSingleTopPart}>
        <div className={styles.courseImageWrapper}>
          <img
            src={data.uri + data.page?.image_url}
            className="attachment-full size-full wp-post-image"
            alt={data.page?.page_title}
          />
          {mode === "course" && (
            <div className={styles.videoButton}>
              <Link href="/">
                <a>
                  <span className="mdi mdi-play-outline flex justify-center items-center ml-2" />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${styles.courseDesciption} ${
          showDescription && styles.showDescription
        }`}
        dangerouslySetInnerHTML={createMarkup()}
      />

      <div className={styles.more}>
        <span
          className={styles.jsCollapseBtn}
          data={showDescription ? " بستن" : "نمایش بیشتر"}
          onClick={() => setShowDescription(!showDescription)}
        >
          <i
            className={`mdi mdi-chevron-${
              showDescription ? "up" : "down"
            } mdi-24px flex`}
          />
        </span>
      </div>
      <div className={styles.infoBox}>
        {mode === "course" && (
          <div className="bg-orange-100 border-r-4 mt-12 rounded-md border-orange-500 text-orange-700 p-4">
            راهنما ! جهت دریافت لینک دانلود تمامی قسمت ها بر روی این لینک .کلیک
            کنید.
          </div>
        )}
      </div>
    </div>
  );
}
