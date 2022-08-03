import { errorMessage, successMessage } from "../../helpers/helpers";
import { initScoreForPage, newScoreForPage } from "../../services/mainService";
import { loading } from "./loading";

export const initScore = (pageId) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const { data } = await initScoreForPage(pageId);
      await dispatch({ type: "INIT_SCORE", payload: data.score });
    } catch (error) {
      errorMessage("خطای ناشناخته ای رخ داده است");
    } finally {
      dispatch(loading(false));
    }
  };
};

export const newScore = (score, pageId) => {
  return async (dispatch, getState) => {
    const pageScore = { ...getState().score };
    const copyScore = { ...pageScore };
    const newScore = (parseFloat(copyScore.avg) + score.score) / 2;
    copyScore.avg = newScore;
    try {
      dispatch(loading(true));
      const { status, data } = await newScoreForPage(score, pageId);
      if (status === 201) {
        successMessage(data.message);
        await dispatch({ type: "NEW_SCORE", payload: { ...copyScore } });
      } else {
        successMessage(data.message, "dark");
        await dispatch({ type: "NEW_SCORE", payload: { ...pageScore } });
      }
    } catch (error) {
      await dispatch({ type: "NEW_SCORE", payload: { ...pageScore } });
      if (error.response.status === 422) {
        Object.values(error.response.data.errors).map((err) =>
          errorMessage(err[0])
        );
      } else {
        errorMessage("خطای ناشناخته ای رخ داده است");
      }
    } finally {
      dispatch(loading(false));
    }
  };
};

export const clearScore = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_SCORE", payload: {} });
  };
};
