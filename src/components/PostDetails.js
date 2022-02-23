import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import PostCard from "./PostCard";
import CommentList from "../components/CommentList";

export default function PostDetails({ post }) {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/";
  let [comments, setComments] = useState([]);
  let [error, setError] = useState();

  React.useEffect(() => {
    axios
      .get(`${baseURL}${post.id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((err) => {
        setError(err.message || "ERROR");
        console.log(`error: ${err}`);
      });
  }, [post.id]);

  return (
    <div className="post-detail">
      <h1>Post Details</h1>
      <PostCard post={post} />
      <Link to={`/author/${post.userId}`}>Read More by Author</Link>
      <CommentList comments={comments} />
    </div>
  );
}
