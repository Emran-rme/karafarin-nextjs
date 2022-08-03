import { addNewComment, commentForPage } from "../../services/mainService";
import { loading } from "./loading";

import { errorMessage, successMessage } from "../../helpers/helpers";

export const initComment = (id, pageNum = 1) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const { data } = await commentForPage(id, pageNum);
      await dispatch({ type: "INIT_COMMENTS", payload: data.comments });
    } catch (error) {
      await dispatch({ type: "INIT_COMMENTS", payload: [] });
    } finally {
      dispatch(loading(false));
    }
  };
};

export const newComment = (commentData, close) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      const { data, status } = await addNewComment(commentData);
      if (status === 201) {
        successMessage(data.message, "colored");
        close();
      }
      await dispatch({
        type: "NEW_COMMENT",
        payload: [...getState().comments, data.comment],
      });
    } catch (error) {
      if (error.response.status === 422) {
        Object.values(error.response.data.errors).map((err) =>
          errorMessage(err[0])
        );
      }
    } finally {
      dispatch(loading(false));
    }
  };
};

export const clearComment = () => {
  return async (dispatch) => {
    await dispatch({ type: "INIT_COMMENTS", payload: [] });
  };
};
