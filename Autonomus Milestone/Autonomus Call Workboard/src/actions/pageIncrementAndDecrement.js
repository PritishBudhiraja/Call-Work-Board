import * as actionTypes from "./actionTypes";

export function pageIncrement() {
  return {
    type: actionTypes.PAGE_INCREMENT,
  };
}

export function pageDecrement() {
  return {
    type: actionTypes.PAGE_DECREMENT,
  };
}
