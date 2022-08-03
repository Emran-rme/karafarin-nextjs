import { initMain } from "../../services/mainService";

export const setCategories = () => {
  return async (dispatch) => {
    const { data } = await initMain('categories');
    await dispatch({ type: "SET_DATA", payload: data.data });
    await dispatch({type: "INIT_POST_SECTIONS", payload: data.data?.posts})
  };
};
