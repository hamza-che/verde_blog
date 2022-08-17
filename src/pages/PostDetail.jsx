import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments } from "../redux";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
// Components
import Comment from "../components/Comment";
import Post from "../components/Post";
import PostDetailHeader from "../components/PostDetailHeader";
import Loading from "../components/Loading";
import Error from "../components/Error";

const PostDetail = ({ postsData, commentsData, fetchComments }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchComments(id);
  }, []);

  return (
    <main>
      <div className="lg:w-1/2">
        <PostDetailHeader />
        {/* Post */}
        {postsData.loading ? (
          <Loading />
        ) : postsData.error ? (
          <Error errorMsg={postsData.error} />
        ) : (
          postsData &&
          postsData.posts &&
          postsData.posts.map(post => {
            return post.id == id ? <Post key={post.id} post={post} /> : null;
          })
        )}
        <div className="flex justify-end gap-5">
          <button className="flex items-center gap-1 bg-pink-600 text-white text-sm px-3 py-2 rounded-md">
            <BsFillTrashFill /> Delete
          </button>
          <button className="flex items-center gap-1 bg-blue-700 text-white text-sm px-3 py-2 rounded-md">
            <BsPencilFill /> Update
          </button>
        </div>
        {/* Comments */}
        <h2 className="text-2xl font-bold mb-3">Comments</h2>
        {commentsData.loading ? (
          <Loading />
        ) : commentsData.error ? (
          <Error errorMsg={commentsData.error} />
        ) : (
          commentsData &&
          commentsData.comments &&
          commentsData.comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />;
          })
        )}
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    postsData: state.posts,
    commentsData: state.comments,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: id => dispatch(fetchComments(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
