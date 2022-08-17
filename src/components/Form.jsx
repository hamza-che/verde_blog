import React from "react";

const Form = ({ titleValue, bodyValue, onTitleChange, onBodyChange }) => {
  return (
    <form>
      <div className="flex gap-6 items-center justify-center my-4 mx-auto lg:w-3/4 ">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={titleValue}
          className="w-full block border border-gray-300 outline-0 h-8 p-1 rounded-sm"
          onChange={onTitleChange}
        />
      </div>
      <div className="flex gap-6 items-center justify-center mx-auto my-4 lg:w-3/4 ">
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          placeholder="Body"
          value={bodyValue}
          className="w-full border border-gray-300 outline-0 p-1 h-64 inline rounded-sm"
          onChange={onBodyChange}
        />
      </div>
    </form>
  );
};

export default Form;
