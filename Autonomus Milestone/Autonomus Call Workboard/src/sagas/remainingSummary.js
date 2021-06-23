import axios from "axios";

import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import {
  fetchRemainingSummarySuccess,
  fetchRemainingSummaryFailure,
} from "../actions/remainingSummary";
import { isLoading } from "./../actions/callWorkBoard";

function* workerRemainingSummary() {
  try {
    yield put(isLoading());
    const response = yield call(
      axios.post,
      "http://localhost:4000/getUpcomingSummary.do"
    );
    yield put(fetchRemainingSummarySuccess(response.data));
  } catch (error) {
    yield put(fetchRemainingSummaryFailure(error));
  }
}

export default function* watchRemainingSummary() {
  yield takeLatest(actionTypes.API_CALL, workerRemainingSummary);
}
