import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const PostDailHeader = () => {
  return (
    <div className="flex items-center  justify-between mb-6">
      <div className="flex items-center gap-4 font-bold text-2xl">
        <Link to="/" className="p-1 bg-gray-300 rounded-full">
          <BsArrowLeft size="1.5rem" />
        </Link>
        Posts
      </div>
      <div>
        <Link
          to="/newpost"
          className="bg-blue-700 text-white text-sm px-3 py-2 inline-block rounded-md"
        >
          + New Post
        </Link>
      </div>
    </div>
  );
};

export default PostDailHeader;
