import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POSTS_SUCCESS,
  DELETE_POSTS_REQUEST,
  POST_POSTS_REQUEST,
  POST_POSTS_SUCCESS,
  POST_POSTS_FAILURE,
  UPDATE_POSTS_REQUEST,
  UPDATE_POSTS_SUCCESS,
  UPDATE_POSTS_FAILURE,
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

// Post Posts
export const postPostRequest = () => {
  return {
    type: POST_POSTS_REQUEST,
  };
};

export const postPostSuccess = post => {
  return {
    type: POST_POSTS_SUCCESS,
    payload: post,
  };
};

export const postPostsFailure = error => {
  return {
    type: POST_POSTS_FAILURE,
    payload: error,
  };
};

export const postPost = post => {
  return dispatch => {
    dispatch(postPostRequest());
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", post)
      .then(response => {
        dispatch(postPostSuccess(post));
        console.log(response);
      })
      .catch(error => {
        postPostsFailure(error);
        console.log(error);
      });
  };
};

// Update Posts
export const updatePostRequest = () => {
  return {
    type: UPDATE_POSTS_REQUEST,
  };
};

export const updatePostSuccess = post => {
  return {
    type: UPDATE_POSTS_SUCCESS,
    payload: post,
  };
};

export const updatePostsFailure = error => {
  return {
    type: UPDATE_POSTS_FAILURE,
    payload: error,
  };
};

export const updatePost = updatedPost => {
  return dispatch => {
    dispatch(updatePostRequest());
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
        updatedPost
      )
      .then(response => {
        dispatch(updatePostSuccess(response.data));
      })
      .catch(error => {
        updatePostsFailure(error);
        console.log(error);
      });
  };
};

// Delete Posts
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
