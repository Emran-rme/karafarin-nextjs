import Link from "next/link";

export default function PageVideo({ styles }) {
  return (
    <div className={`${styles.courseSingleContent} ${styles.courseVideo}`}>
      <div className={styles.courseDesciption}>
        <h4 className="my-4">فهرستــــ ویدیوها</h4>
        <div className={styles.courseSingleTopPart}>
          <div className={styles.courseImageWrapper}>
            <img
              width="1667"
              height="954"
              src="https://d2ffcs5wrcif.cdn.shift8web.com/wp-content/uploads/LOW-3.jpg"
              className="attachment-full size-full wp-post-image"
              alt=""
            />
            <div className={styles.videoButton}>
              <Link href="/">
                <span className="mdi mdi-play-outline flex justify-center items-center ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.videoItem}>
          <span className={styles.videoItem__number}>1</span>
          <div className={`${styles.videoItem__title} mr-2`}>
            مقدمه و معرفی دوره
          </div>
          <div className={styles.videoItem__dlTime}>
            <span>00:00:00</span>
            <span className="mdi mdi-download-circle-outline" />
          </div>
        </div>
      </div>
    </div>
  );
}
