import PostCardHorizontal from "../PostCardHorizontal";

export default function PageRelated({ styles, title, data }) {
  return (
    <div className={styles.courseReviews}>
      <div className={styles.courseReviewTitle}>
        <h3 className={styles.inner}>
          <span className="mdi mdi-more mdi-24px ml-2" />
          <span>{title}</span>
        </h3>
      </div>
      {data.map((page, index) => (
        <PostCardHorizontal page={page} key={index} />
      ))}
    </div>
  );
}
