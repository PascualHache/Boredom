import { all } from "redux-saga/effects";
import boredData from "./bored.sagas";

export default function* rootSaga() {
  yield all([boredData()]);
}
