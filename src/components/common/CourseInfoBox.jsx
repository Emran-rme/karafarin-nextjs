import Counter from "./partials/Counter";
import Keywords from "./partials/Keywords";
import Galleries from "./partials/Galleries";
import Score from "./partials/Score";

const Components = {
  Counter,
  Keywords,
  Galleries,
  Score,
};

export default function CourseInfoBox({ styles, item, data }) {
  const DynamicallyComponent = Components[item];

  return (
    <div className={styles.courseInfoBox}>
      <DynamicallyComponent styles={styles} data={data} />
    </div>
  );
}
