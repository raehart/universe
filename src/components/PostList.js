import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { PostsContext } from "../contexts/PostsContext";

import PostCard from "./PostCard";

export default function PostList() {
  const { posts, error } = useContext(PostsContext);
  return (
    <div className="post-list">
      {error && <div className="post-list-error">{error.message}</div>}
      {posts.map((post, index) => {
        return (
          <Link to={`/post/${post.id}`} key={index} style={{textDecoration: 'none'}}>
            <PostCard post={post} />
          </Link>
        );
      })}
    </div>
  );
}
