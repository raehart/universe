import React, {useState} from "react";
import axios from "axios";

import './PostCard.scss';


const baseURL = "https://jsonplaceholder.typicode.com/posts/1/";

export default function PostCard(props) {
  let [post, setPost] = useState("");
  let [error, setError] = useState("");

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(`post: ${post}`);
    }).catch(err => {
      setError(err.message);
      console.log(`error: ${err}`);
    });
  }, []);


  return (
    <div className="post-card">
      <div className="c-card">
        <div role="separator" className="c-card__item c-card__item--divider">
          <h2>{post && post.title}</h2>
          <p>{error && error}</p>
        </div>
        <div className="c-card__item">
          <p className="c-paragraph">
            {post.body && post.body}
          </p>
        </div>
      </div>
    </div>
  );
}
