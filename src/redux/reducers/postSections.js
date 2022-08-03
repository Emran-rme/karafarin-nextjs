export const postSectionReducers =  (state = [], action) => {
    switch (action.type) {
        case "INIT_POST_SECTIONS":
            return [...action.payload]
        default:
            return state;
    }
};