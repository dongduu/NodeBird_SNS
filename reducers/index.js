// initialState 만들기
const initialState = {
  name: "dongduu",
  age: 23,
  password: "dlehdwn412",
};

// action 만들기
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

// action 사용
changeNickname("leedongjoo");
// {
//     type: "CHANGE_NICKNAME",
//     data: 'leedongjoo'
// }
store.dispatch(changeNickname("dj"));

// reducer 만들기(함수)
// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return {
        ...state,
        name: action.data,
      };
  }
};

export default rootReducer;
