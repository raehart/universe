import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import { PostsContext } from "./contexts/PostsContext";
import PostCard from "./components/PostCard";
import PostList from "./components/PostList";
import CommentCard from "./components/CommentCard";

function App() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/";

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
    <div className="app">
      <PostsContext.Provider value={{posts, setPosts, error, setError}}>
        <Router>
          <Routes>
            {/* homePage */}
            <Route path="/" element={<PostList />}></Route>
            {/* post/id */}
            <Route path="/post/:id" element={<PostCard />}></Route>
            <Route path="/comment" element={<CommentCard />}></Route>
            {/* PostPage */}
            {/* Author Page */}
          </Routes>
        </Router>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
