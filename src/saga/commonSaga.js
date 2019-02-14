import { delay } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import { COMMON_REDEUSER, COMMON_ACTION } from "../Action/type";

function* commonSagaAction(data) {
    yield put({ type: "COMMON_REDEUSER", payload: data.payload });
}

const watchCommonAsync = [takeLatest(COMMON_ACTION, commonSagaAction)];

export default watchCommonAsync;