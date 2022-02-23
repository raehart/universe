import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { PostsContext } from "../contexts/PostsContext";
import PostList from "../components/PostList";

export default function AuthorPage() {
  const params = useParams();
  let { posts } = useContext(PostsContext);
  // filter post by author
  posts = posts.filter((post) => post.userId === +params.id);

  return (
    <>
      <Link to="/">Back to Home</Link>
      <h1>Posts By: User {params.id}</h1>
      {posts && posts.map((post, index) => {
        return <PostList posts={posts} key={index}/>
      })}
    </>
  );
}
