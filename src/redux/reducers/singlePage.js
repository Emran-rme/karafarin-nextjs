export const singlePageReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_PAGE_INFO":
      return { ...action.payload };
    case "CLEAR_PAGE_INFO":
      return { ...action.payload };
    default:
      return state;
  }
};
