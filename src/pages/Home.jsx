import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";
// Components
import Post from "../components/Post";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = ({ postsData, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return postsData.loading ? (
    <Loading />
  ) : postsData.error ? (
    <Error errorMsg={postsData.error} />
  ) : (
    <main className="flex gap-4 flex-wrap p-6 bg-white">
      {postsData &&
        postsData.posts &&
        postsData.posts.map(post => {
          return post.userId === 1 && <Post post={post} key={post.id} />;
        })}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    postsData: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
