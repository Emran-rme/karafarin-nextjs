export const commentsReducers = (state = {}, action) => {
  switch (action.type) {
    case "INIT_COMMENTS":
      return { ...action.payload };
    case "NEW_COMMENT":
      return [...action.payload];
    default:
      return state;
  }
};
