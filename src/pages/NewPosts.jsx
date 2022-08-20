import React, { useState } from "react";
import { connect } from "react-redux";
import { postPost } from "../redux";
import Form from "../components/Form";

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
    <main className="text-center bg-white p-5">
      <h1 className="mb-6 text-2xl font-bold">Create a new post</h1>
      <Form
        isButton={true}
        buttonBgColor="bg-green-700"
        onTitleChange={e => changeHandler(e)}
        onBodyChange={e => changeHandler(e)}
        onSubmit={addPost}
      />
    </main>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postPost: post => dispatch(postPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(NewPosts);
