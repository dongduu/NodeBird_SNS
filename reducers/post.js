export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "동두",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png",
        },
        {
          src: "https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png",
        },
        {
          src: "https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png",
        },
      ],
      // 깃허브 연습
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "마싯겠땅",
        },
        {
          User: {
            nickname: "babo",
          },
          content: "어쩌라거ㅗ",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummmyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "더미",
  },
  Images: [],
  Contents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummmyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
