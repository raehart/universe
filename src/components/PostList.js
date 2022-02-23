import React, { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";

import PostCard from "./PostCard";

export default function PostList() {
  const {posts, error}  = useContext(PostsContext)
  return (
    <div className="post-list">
      {error && <div className="post-list-error">{error.message}</div>}
      {posts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
}
