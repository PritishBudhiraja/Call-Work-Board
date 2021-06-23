import * as actionTypes from "../actions/actionTypes";

const initialState = {
  showFreeda: false,
};

export default function showFreeda(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_FREEDA:
      return {
        ...state,
        showFreeda: !state.showFreeda,
      };
    default:
      return state;
  }
}
