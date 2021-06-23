import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  searchView: false,
  pageNumber: 0,
  dataUserCallbook: {},
  remainingSummary: {},
  searchResults: {},
  totalCustomerCountInUserCallBook: 0,
  expectedCallingMinutes: 0,
  completedCallingMinutes: 0,
  totalPastDueProcessed: 0,
  totalPastDueAmount: 0,
  error: null,
};

export default function callWorkBoard(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_USER_CALLBOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchView: false,
        dataUserCallbook: action.newData,
        totalCustomerCountInUserCallBook:
          action.newData.overview.totalCustomerCount,
        completedCallingMinutes:
          action.newData.overview.completedCallingMinutes,
        expectedCallingMinutes: action.newData.overview.expectedCallingMinutes,
        totalPastDueAmount: action.newData.overview.totalPastDueAmount,
        totalPastDueProcessed: action.newData.overview.totalPastDueProcessed,
        searchResults: {},
      };

    case actionTypes.FETCH_USER_CALLBOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        searchView: false,
        searchResults: {},
        error: action.error,
      };

    case actionTypes.FETCH_REMAINING_SUMMARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchView: false,
        remainingSummary: action.summary,
      };

    case actionTypes.FETCH_REMAINING_SUMMARY_FAILURE:
      return {
        ...state,
        isLoading: false,
        searchView: false,
        error: action.error,
      };

    case actionTypes.PAGE_INCREMENT:
      return {
        ...state,
        isLoading: false,
        searchView: false,
        pageNumber: state.pageNumber + 1,
      };

    case actionTypes.PAGE_DECREMENT:
      return {
        ...state,
        searchView: false,
        isLoading: false,
        pageNumber: state.pageNumber - 1,
      };

    case actionTypes.SEARCH_SUCCESSFUL:
      return {
        ...state,
        searchView: true,
        searchResults: action.searchResults,
        dataUserCallbook: {},
      };

    case actionTypes.SEARCH_FAILURE:
      return { ...state, searchResults: {}, error: action.error };

    default:
      return state;
  }
}
