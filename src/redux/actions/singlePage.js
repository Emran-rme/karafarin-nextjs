export const setPageInfo = (pageInfo) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_PAGE_INFO", payload: { ...pageInfo } });
  };
};
export const clearPageInfo = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_PAGE_INFO", payload: {} });
  };
};
