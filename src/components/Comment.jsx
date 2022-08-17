import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="lg:w-1/2 mb-3">
      <h3 className="font-bold text-xl">Email: </h3> <p>{comment.email}</p>
      <h4 className="font-bold">Comment: </h4> <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
