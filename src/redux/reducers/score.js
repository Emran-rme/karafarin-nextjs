export const scorereducer = (state = {}, action) => {
  switch (action.type) {
    case "INIT_SCORE":
      return { ...action.payload };
    case "NEW_SCORE":
      return { ...action.payload };
    case "CLEAR_SCORE":
      return { ...action.payload };
    default:
      return state;
  }
};
