import { combineReducers } from "redux";
import { techNews, footballNews } from "./news";

const rootReducer = combineReducers({
  techNews,
  footballNews
});

export default rootReducer;
