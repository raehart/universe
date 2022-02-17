import "./App.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PostCard from "./components/PostCard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/post-card" element={<PostCard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
