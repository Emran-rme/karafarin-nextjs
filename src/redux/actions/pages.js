import { popularPage } from "../../services/mainService";

export const setPages = (slug, take) => {
  return async (dispatch) => {
    try {
      const { data } = await popularPage(slug, take);
      await dispatch({ type: "SET_PAGES", payload: data.pages });
    } catch (error) {
      await dispatch({ type: "CLEAR_PAGES", payload: [] });
    }
  };
};
// export const clearPages = () => {
//   return async (dispatch) => {
//     await dispatch({ type: "CLEAR_PAGES", payload: {} });
//   };
// };
