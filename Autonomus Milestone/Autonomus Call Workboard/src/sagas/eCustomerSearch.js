import axios from "axios";

import { call, put, takeLatest } from "redux-saga/effects";

import { isLoading } from "../actions/callWorkBoard";
import { searchSuccessful, searchFailure } from "./../actions/eCustomerSearch";

import * as actionTypes from "../actions/actionTypes";

function* workerCustomerSearch({ searchingData }) {
  try {
    yield put(isLoading());
    const response = yield call(
      axios.post,
      `http://localhost:4000/esCustomerSearch.do`,
      searchingData
    );
    yield put(searchSuccessful(response.data));
  } catch (error) {
    yield put(searchFailure(error));
  }
}

export default function* watchCustomerSearch() {
  yield takeLatest(actionTypes.SEARCH_API_CALL, workerCustomerSearch);
}
