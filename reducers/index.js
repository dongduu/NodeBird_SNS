import { HYDRATE } from "next-redux-wrapper"; // 리덕스 서버 사이드 렌더링을 위함
import { combineReducers } from "redux"; // 함수끼리는 합치기 어렵기 때문에 combineReducers를 사용한다.

import user from "./user"; // 긱각의 initialstate는 combineReducers가 알아서 넣어줌
import post from "./post";

// reducer 만들기(함수)
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
