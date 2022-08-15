import { Counter, Keywords, Galleries, Score } from "../../";

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
