import axios from "axios";

import { call, put, takeLatest, select } from "redux-saga/effects";

import {
  fetchUserCallBackSuccess,
  isLoading,
  fetchUserCallBackFailure,
} from "../actions/callWorkBoard";

import * as actionTypes from "../actions/actionTypes";

export const getPageNumber = (state) => state.callWorkBoard.pageNumber;

function* workerUserCallBook() {
  try {
    yield put(isLoading());
    let pageNumber = yield select(getPageNumber);
    const response = yield call(
      axios.post,
      `http://localhost:4000/getUserCallWorkBook.do?pageNumber=${pageNumber}&pageSize=5`
    );
    yield put(fetchUserCallBackSuccess(response.data));
  } catch (error) {
    yield put(fetchUserCallBackFailure(error));
  }
}

export default function* watchUserCallBook() {
  yield takeLatest(actionTypes.API_CALL, workerUserCallBook);
}
