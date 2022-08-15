import { useSelector } from "react-redux";
import { translateEnglishNumberToPersian } from "../../../../helpers/helpers";

export default function Counter({ styles, data = null }) {
  const commentsList = useSelector((state) => state.comments);

  return (
    <div className={styles.stdBoxView}>
      <span className={`${styles.courseViews} flex items-center`}>
        <span className="mdi mdi-account-eye-outline mdi-24px ml-2" />
        <span>{translateEnglishNumberToPersian(data.view_count)} بازدید</span>
      </span>
      <span className={`${styles.courseReviewsCount} flex items-center`}>
        <span className="mdi mdi-comment-multiple-outline mdi-24px ml-2" />
        <span>
          {translateEnglishNumberToPersian(commentsList.total)} دیدگاه
        </span>
      </span>
    </div>
  );
}
