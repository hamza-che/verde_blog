import { combineReducers } from "redux";
import postReducer from "./post/postReducer";
import commentReducer from "./comment/commentReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

export default rootReducer;
