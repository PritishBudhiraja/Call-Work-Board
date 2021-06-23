import * as actionTypes from "./actionTypes";

export function fetchRemainingSummarySuccess(summary) {
  return {
    type: actionTypes.FETCH_REMAINING_SUMMARY_SUCCESS,
    summary,
  };
}

export function fetchRemainingSummaryFailure(error) {
  return {
    type: actionTypes.FETCH_REMAINING_SUMMARY_FAILURE,
    error,
  };
}
