import { combineReducers } from "redux";
import loadingReducer from "./loadingReducers";
import errorReducer from "./errorReducers";
import imagesReducer from "./imagesReducers";
import pageReducer from "./pageReducers";
import statsReducer from "./statsReducer";

export default combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer,
  imageStats: statsReducer
});
