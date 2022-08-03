import { translateEnglishNumberToPersian } from "../../../helpers/helpers";

export default function Keywords({ styles = null, data = null }) {
  return (
    <span className={styles.taggedAs}>
      <div className="flex items-center">
        <span className="mdi mdi-tag-multiple-outline mdi-24px ml-1" />
        <span className="ml-1">برچسب:</span>
      </div>
      {data.keywords?.split(",").map((item, index) => (
        <a
          key={index}
          href={`https://reactapp.ir/product-tag/${item.split(" ").join("-")}}`}
          rel="tag"
        >
          {item}
        </a>
      ))}
    </span>
  );
}
