import React, {useState} from 'react';
import axios from "axios";

import PostCard from "./PostCard";

const baseURL = "https://jsonplaceholder.typicode.com/posts/";

export default function PostList() {

  let [posts, setPosts] = useState([]);
  let [error, setError] = useState({});

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
      console.log(`posts: ${posts}`);
    }).catch(err => {
      setError(err);
      console.log(`error: ${err.message}`);
    });
  }, []);
  
  return (

      <div className="post-list">
        {error && <div className="post-list-error">{error.message}</div>}
        {posts.map((post, index) => {
          return <PostCard key={index} post={post}/>
        })}

      </div>
  );
}