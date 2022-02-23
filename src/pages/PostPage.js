import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { PostsContext } from "../contexts/PostsContext";
import PostDetails from "../components/PostDetails";
import CommentList from "../components/CommentList";

export default function PostPage() {
  const params = useParams();
  const { posts } = useContext(PostsContext);
  // Get post by params.id, display err if not found
  // + before string will coerce it to a number, using for params
  const post = posts.find((p) => p.id === +params.id);

  return (
    <>
      <Link to="/">Back to Home</Link>
      {post ? <PostDetails post={post} /> : <p>Post Not Found</p>}
      <CommentList />
    </>
  );
}
