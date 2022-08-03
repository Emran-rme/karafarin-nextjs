import { loadingReducer } from "./loading";
import { combineReducers } from "redux";
import { mainReducers } from "./main";
import { singlePageReducer } from "./singlePage";
import { PagesReducers } from "./Pages";
import { commentsReducers } from "./comments";
import { scorereducer } from "./score";
import { postSectionReducers } from "./postSections";

export const reducers = combineReducers({
  loading: loadingReducer,
  main: mainReducers,
  pages: PagesReducers,
  singlePage: singlePageReducer,
  comments: commentsReducers,
  score: scorereducer,
  postSections: postSectionReducers
});
