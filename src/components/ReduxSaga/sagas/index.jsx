import { all } from "redux-saga/effects";
import imagesSage from "./imagesSaga";
import statsSaga from "./statsSaga";

export default function* rootSaga() {
  yield all([imagesSage(), statsSaga()]);
}
