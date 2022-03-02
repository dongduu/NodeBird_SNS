// 순서
// 이니셜데이터 구성 => 액션 구성(리듀서 작성) =>

export const initialState = {
  mainPosts: [
    {
      id: 1, // 게시글 자체 속성
      User: {
        // 다른 정보들과 합쳐서 줌
        id: 1,
        nickname: "동두",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스", // 게시글 자체 속성
      Images: [
        // 다른 정보들과 합쳐서 줌
        {
          src: "https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png",
        },
        // {
        //   src: "https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png",
        // },
        // {
        //   src: "https://cdn.inflearn.com/public/files/courses/325637/b3dcddbc-f6c2-4c35-a1ae-350af347616e/325637-0.png",
        // },
      ],
      Comments: [
        {
          // 다른 정보들과 합쳐서 줌
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
  imagePaths: [], // 이미지를 업로드 할 때 이미지 경로가 추가 될 것
  postAdded: false, // 게시글 추가가 완료되면 true로 바뀜
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
        mainPosts: [dummmyPost, ...state.mainPosts], // 앞에 추가해야 게시글이 위로 올라옴
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
