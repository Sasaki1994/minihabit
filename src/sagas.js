import "regenerator-runtime/runtime";
import { db } from "../firebase.config";
import { call, put, takeEvery } from "redux-saga/effects";

function getUser(userId) {
  const user = db
    .collection("users")
    .doc(String(userId))
    .get()
    .then((doc) => {
      return doc.data();
    })
    .catch((error) => {
      console.log(`データの取得に失敗しました (${error})`);
    });
  return user;
}

function writeHabit(payload) {
  db.collection("users")
    .doc(String(payload.userId))
    .collection("habits")
    .doc(String(payload.habit.id))
    .set(payload.habit)
    .catch((error) => {
      console.log(`データの取得に失敗しました (${error})`);
    });
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(getUser, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    yield put({ type: "HABITS_MAPPING_TO_STATE", habits: user.habits });
    yield put({ type: "RECORDS_MAPPING_TO_STATE", habits: user.records });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* createHabit(action) {
  try {
    yield call(writeHabit, action.payload);
    yield put({
      type: "USER_FETCH_REQUESTED",
      payload: { userId: action.payload.userId },
    });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery("CREATE_HABIT_REQUESTED", createHabit);
}

export default rootSaga;
