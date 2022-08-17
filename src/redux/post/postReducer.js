import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POSTS_REQUEST,
  DELETE_POSTS_SUCCESS,
} from "./postTypes";

const initialState = {
  loading: false,
  posts: [],
  postsNumber: 0,
  userId: 1,
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        postsNumber: state.posts.reduce((acc, curr) => {
          return curr.userId === 1 ? acc + 1 : acc;
        }, 0),
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        postsNumber: 0,
        error: action.payload,
      };
    case DELETE_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post.id == action.payload),
        postsNumber: state.postsNumber - 1,
      };
    default:
      return state;
  }
};

export default postReducer;
