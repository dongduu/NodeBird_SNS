import {
  all,
  fork,
  put,
  delay,
  takeLatest,
  actionChannel,
} from "redux-saga/effects";

function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  try {
    // const result = yield fork(logInAPI);
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({ type: "LOG_IN_FAILURE", data: err.response.data });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield fork(logOutAPI);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({ type: "LOG_OUT_FAILURE", data: err.response.data });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
