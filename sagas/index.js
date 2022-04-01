import {
  all,
  fork,
  put,
  takeLatest,
  throttle,
  delay,
} from "redux-saga/effects";
import axios from "axois";

// fork - 비동기 함수 호출
// call - 동기 함수 호출
// take - 한번만 가져옴
// takeEvery - 클릭할 때마다 가져옴
// takeLatest - 마지막으로 누른 것만 인식하고 가져옴(백엔드 상에서는 인식할 수가 없어서 문제)
// throttle - 시간을 지정해서 그 시간 동안 한번만 가져옴

function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  try {
    // const result = yield fork(logInAPI);
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
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
      data: result.data,
    });
  } catch (err) {
    yield put({ type: "LOG_OUT_FAILURE", data: err.response.data });
  }
}

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    // const result = yield fork(addPostAPI);
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({ type: "ADD_POST_FAILURE", data: err.response.data });
  }
}

function* watchLogIn() {
  // 각각의 이벤트 리스너 역할
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost() {
  yield throttle("ADD_POST_REQUEST", addPost, 2000);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]); // all로 이벤트 리스너 등록
}
