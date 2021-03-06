import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from "../reducers/post";

function addPostAPI() {
  return axios.post("/api/post", data);
}

function* addPost() {
  try {
    // const result = yield fork(addPostAPI);
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
    });
  } catch (err) {
    yield put({ type: ADD_POST_FAILURE, error: err.response.data });
  }
}

function addCommnetAPI() {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment() {
  try {
    // const result = yield fork(addCommentAPI);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (err) {
    yield put({ type: ADD_COMMENT_FAILURE, error: err.response.data });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
