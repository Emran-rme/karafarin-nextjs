import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "../reducers/index";
import { setCategories } from "../actions/main";

const Middleware = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...Middleware))
);
// store.dispatch(setCategories());
