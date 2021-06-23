import { all, fork } from "redux-saga/effects";

import watchUserCallBook from "./callWorkBoard";
import remainingSummary from "./remainingSummary";
import watchCustomerSearch from "./eCustomerSearch";

export default function* rootSaga() {
  yield all([
    fork(watchUserCallBook),
    fork(remainingSummary),
    fork(watchCustomerSearch),
  ]);
}
