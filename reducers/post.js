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
          src: "https://bimage.interpark.com/goods_image/8/3/4/5/351458345g.jpg",
        },
        {
          src: "https://bimage.interpark.com/partner/goods_image/3/5/5/2/339153552g.jpg",
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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

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
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummmyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        mainPosts: [dummmyPost, ...state.mainPosts],
        addCommnetLoading: false,
        addCommnetDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommnetLoading: false,
        addCommnetError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
