import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POSTS_SUCCESS,
  DELETE_POSTS_REQUEST,
} from "./postTypes";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPostsFailure(errorMsg));
      });
  };
};

export const deletePostRequest = () => {
  return {
    type: DELETE_POSTS_REQUEST,
  };
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POSTS_SUCCESS,
    payload: id,
  };
};

export const deletePost = id => {
  return dispatch => {
    dispatch(deletePostRequest());
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(id));
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
