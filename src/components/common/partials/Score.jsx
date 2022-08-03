import { range, isEmpty } from "loadsh";
import { useDispatch, useSelector } from "react-redux";
import { translateEnglishNumberToPersian } from "../../../helpers/helpers";
import { newScore } from "../../../redux/actions/score";
import { ThreeDots } from "react-loader-spinner";

export default function Score() {
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();

  const handleScore = (score, pageId) => {
    const data = {
      score,
    };
    dispatch(newScore(data, pageId));
  };
  return (
    <div className="flex flex-col">
      <div className="flex text-gray-500 text-base justify-between border-b">
        <span className="mb-4">امتیاز شما به این صفحه :</span>
        <span>
          {!isEmpty(score) ? (
            translateEnglishNumberToPersian(parseFloat(score.avg).toFixed(2))
          ) : (
            <ThreeDots
              heigth="30"
              width="30"
              color="grey"
              ariaLabel="loading"
            />
          )}
          از ۵
        </span>
      </div>
      <div className="text-center" dir="ltr">
        {!isEmpty(score) ? (
          range(0, 5).map((item, i) => (
            <span
              key={i}
              onClick={() => handleScore(i + 1, score.page_id)}
              className={`mdi ${
                Math.floor(score.avg) > item
                  ? "mdi-star -intro-x"
                  : score.avg > item
                  ? "mdi-star-half-full -intro-x"
                  : "mdi-star-outline -intro-x hover:text-yellow-500"
              } mdi-36px text-yellow-400 cursor-pointer z-10`}
            />
          ))
        ) : (
          <div className="flex justify-center">
            <ThreeDots
              heigth="30"
              width="30"
              color="grey"
              ariaLabel="loading"
            />
          </div>
        )}
      </div>
    </div>
  );
}
