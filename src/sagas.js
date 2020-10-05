import "regenerator-runtime/runtime";
import { call, put, takeEvery } from "redux-saga/effects";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  yield call(() => console.log("kkk"));
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield takeEvery("TEST", fetchUser);
}

export default rootSaga;
