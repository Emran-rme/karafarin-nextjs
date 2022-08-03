export const PagesReducers = (state = [], action) => {
  switch (action.type) {
    case "SET_PAGES":
      return [...action.payload];
    case "CLEAR_PAGES":
      return [...action.payload];
    default:
      return state;
  }
};
