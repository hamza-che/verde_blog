import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POSTS_REQUEST,
  DELETE_POSTS_SUCCESS,
  POST_POSTS_SUCCESS,
  POST_POSTS_FAILURE,
  UPDATE_POSTS_REQUEST,
  UPDATE_POSTS_SUCCESS,
  UPDATE_POSTS_FAILURE,
} from "./postTypes";

const initialState = {
  loading: false,
  posts: [],
  postsNumber: 0,
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
        error: "",
      };
    case POST_POSTS_SUCCESS:
      return {
        loading: false,
        posts: [ ...state.posts, action.payload ],
        postsNumber: state.postsNumber + 1,
        error: "",
      };
    case POST_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [ action.payload ].map(m => {
          let item = state.posts.find(n => n.id === m.id);
          if (item) {
            return Object.assign(item, m);
          }
          state.posts.push(m);
        }),
        postsNumber: state.posts.reduce((acc, curr) => {
          return curr.userId === 1 ? acc + 1 : acc;
        }, 0),
        error: "",
      };
    case UPDATE_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
