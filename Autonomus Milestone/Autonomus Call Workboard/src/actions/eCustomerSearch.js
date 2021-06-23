import * as actionTypes from "./actionTypes";

export function searchApi(searchingData) {
  return {
    type: actionTypes.SEARCH_API_CALL,
    searchingData,
  };
}

export function searchSuccessful(searchResults) {
  return {
    type: actionTypes.SEARCH_SUCCESSFUL,
    searchResults,
  };
}

export function searchFailure(error) {
  return {
    type: actionTypes.SEARCH_FAILURE,
    error,
  };
}
