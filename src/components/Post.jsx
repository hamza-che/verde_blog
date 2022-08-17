import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Post = ({ post: { title, id, body } }) => {
  return (
    <Link to={`/${id}`} className="max-w-sm w-fit w-100 p-3">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="my-3 text-gray-700">{body}</p>
    </Link>
  );
};

export default Post;
