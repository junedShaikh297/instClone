import { all } from "redux-saga/effects";
import watchCommonAsync from "./commonSaga";


export function* rootSaga() {
  yield all([
    ...watchCommonAsync,
  ]);
}