import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import { PostsContext } from "./contexts/PostsContext";
import PostPage from "./pages/PostPage";
import AuthorPage from "./pages/AuthorPage";
import PostList from "./components/PostList";
import CommentCard from "./components/CommentCard";

function App() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/";

  let [posts, setPosts] = useState([]);
  let [error, setError] = useState();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
      console.log(`posts: ${posts}`);
    }).catch(err => {
      setError(err.message || 'ERROR');
      console.log(`error: ${err}`);
    });
  }, []);

  return (
    <div className="app">
      <PostsContext.Provider value={{posts, setPosts, error, setError}}>
        <Router>
          <Routes>
            <Route path="/" element={<PostList />}></Route>
            <Route path="/post/:id" element={<PostPage />}></Route>
            <Route path="/author/:id" element={<AuthorPage/>} ></Route>
          </Routes>
        </Router>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
