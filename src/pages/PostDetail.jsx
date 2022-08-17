import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments, deletePost, updatePost } from "../redux";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
// Components
import Comment from "../components/Comment";
import Post from "../components/Post";
import PostDetailHeader from "../components/PostDetailHeader";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Form from "../components/Form";
import Button from "../components/Button";

const PostDetail = ({
  postsData,
  commentsData,
  fetchComments,
  deletePost,
  updatePost,
}) => {
  const [ isUpdate, setIsUpdate ] = useState(false);
  const [ post, setPost ] = useState({});
  const { id } = useParams();

  const changeHandler = e => {
    e.preventDefault();
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      userId: 1,
    });
  };

  const handleSubmitUpdate = () => {
    updatePost(post);
    setIsUpdate(!isUpdate);
  };

  useEffect(() => {
    const currentPost =
      postsData &&
      postsData.posts &&
      postsData.posts.filter(post => post.id == id);
    setPost(currentPost[0]);
  }, []);

  useEffect(() => {
    fetchComments(id);
  }, []);

  return (
    <main className="bg-white p-5">
      <div className="lg:w-1/2">
        <PostDetailHeader />
        {/* Post */}
        {!isUpdate ? postsData.loading ? (
          <Loading />
        ) : postsData.error ? (
          <Error errorMsg={postsData.error} />
        ) : (
          postsData &&
          postsData.posts &&
          postsData.posts.map(post => {
            return post.id == id ? <Post key={post.id} post={post} /> : null;
          })
        ) : (
          <Form
            titleValue={post.title}
            bodyValue={post.body}
            onTitleChange={e => changeHandler(e)}
            onBodyChange={e => changeHandler(e)}
          />
        )}
        {isUpdate ? (
          <div className="flex justify-end gap-5">
            <Button bgColor="bg-red-600" onClick={() => setIsUpdate(!isUpdate)}>
              Cancel
            </Button>
            <Button bgColor="bg-green-600" onClick={handleSubmitUpdate}>
              Submit
            </Button>
          </div>
        ) : (
          <div className="flex justify-end gap-5">
            <Button bgColor="bg-pink-600" onClick={id => deletePost(id)}>
              <BsFillTrashFill /> Delete
            </Button>
            <Button
              bgColor="bg-blue-700"
              onClick={() => setIsUpdate(!isUpdate)}
            >
              <BsPencilFill /> Update
            </Button>
          </div>
        )}
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
    deletePost: id => dispatch(deletePost(id)),
    updatePost: updatedPost => dispatch(updatePost(updatedPost)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
