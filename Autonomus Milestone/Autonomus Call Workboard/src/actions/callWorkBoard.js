import * as actionTypes from "./actionTypes";

export function fetchUserCallBackSuccess(newData) {
  return {
    type: actionTypes.FETCH_USER_CALLBOOK_SUCCESS,
    newData,
  };
}

export function isLoading() {
  return {
    type: actionTypes.LOADING,
  };
}

export function fetchUserCallBackFailure(error) {
  return {
    type: actionTypes.FETCH_USER_CALLBOOK_FAILURE,
    error,
  };
}

export function apiCall() {
  return {
    type: actionTypes.API_CALL,
  };
}
