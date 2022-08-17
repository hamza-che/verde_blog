import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { postPost } from "../redux";

const NewPosts = ({ postPost }) => {
  const [ newPost, setNewPost ] = useState({});

  const changeHandler = e => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value, userId: 1 });
  };

  const addPost = e => {
    e.preventDefault();
    postPost(newPost);
  };

  return (
    <main className="text-center">
      <h1 className="mb-6 text-2xl font-bold">Create a new post</h1>
      <form onSubmit={addPost}>
        <div className="flex gap-6 items-center justify-center my-4 mx-auto lg:w-3/4 ">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="w-full block border border-gray-300 outline-0 h-8 p-1 rounded-sm"
            onChange={e => changeHandler(e)}
          />
        </div>
        <div className="flex gap-6 items-center justify-center mx-auto my-4 lg:w-3/4 ">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            placeholder="Body"
            className="w-full border border-gray-300 outline-0 p-1 h-64 inline rounded-sm"
            onChange={e => changeHandler(e)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white text-sm px-3 py-2 font-bold inline-block rounded-md"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postPost: post => dispatch(postPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(NewPosts);
