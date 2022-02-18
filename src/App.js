import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import PostCard from "./components/PostCard";
import CommentCard from "./components/CommentCard";



function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* homePage */}
          <Route path="/" element={<PostCard />}></Route>
          <Route path="/post-card" element={<PostCard />}></Route>
          <Route path="/comment" element={<CommentCard />}></Route>
          {/* PostPage */}
          {/* Author Page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
