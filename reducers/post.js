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
          src: "https://postfiles.pstatic.net/MjAyMTA2MjlfMTU3/MDAxNjI0ODk2NDkwMDgz.Q9lKbK2zgM5FWQGKDhaHVcT2zMqVZKzdeW601i9rEIAg.Egv79qTFYRSPHqqIMV50T-AMoBlm0iWNPLudoEZbfncg.JPEG.4012popo/20210108_143447.jpg?type=w966",
        },
        {
          src: "https://postfiles.pstatic.net/MjAyMTA2MjlfMTgy/MDAxNjI0ODk2NDkzNDgz.U7_npqKuy1jx_Dr2escVxRLHNWheUq0ALFUuFQxW4ZIg.63wI-NGWjr1Qdicn6xUxMhazohOTT97uWUO0SidY9W0g.JPEG.4012popo/20210127_185449.jpg?type=w966",
        },
        {
          src: "https://postfiles.pstatic.net/MjAyMTA2MjlfNjYg/MDAxNjI0ODk2NTE0NTc0.cYcUet2ac_ceeCuFGzMzXfd-1jxmvtgU8jDVxMqqZicg.koXU3Kuww7tCOtzOWR8b7PH11QIG80tcc9MgFfrmltwg.JPEG.4012popo/IMG_0429.jpg?type=w966",
        },
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
