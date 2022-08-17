import React, { useState } from "react";
import axios from "axios";

const NewPosts = () => {
  const [ newPost, setNewPost ] = useState({});

  const changeHandler = e => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value, userId: 1 });
  };

  const addPost = e => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then(response => console.log(response))
      .catch(error => console.log(error));
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
            onChange={changeHandler}
          />
        </div>
        <div className="flex gap-6 items-center justify-center mx-auto my-4 lg:w-3/4 ">
          <label htmlFor="body">Body</label>
          <textarea
            placeholder="Body"
            id="body"
            name="body"
            className="w-full border border-gray-300 outline-0 p-1 h-64 inline rounded-sm"
            onChange={changeHandler}
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

export default NewPosts;
