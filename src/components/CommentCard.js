import React, { useState } from "react";
import axios from "axios";

import "./CommentCard.scss";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1/comments";

export default function CommentCard(props) {
  //   let [comment, setComment] = useState("");
  //   let [error, setError] = useState("");

  //   React.useEffect(() => {
  //     axios.get(baseURL).then((response) => {
  //       setComment(response.data);
  //       console.log(`comment: ${comment}`);
  //     }).catch(error => {
  //       setError(error);
  //       console.log(`error: ${error}`);
  //     });
  //   }, []);

  return (
    // map over all comments
    <div className="comment-card">
      <div className="c-card c-card--grouped">
        <div className="c-card__item">
          Commenter Name
          {/* props.name */}
        </div>

        <div className="c-card__item">
          Commenter Email
          {/* props.email */}
        </div>
        <div role="separator" className="c-card__divider"></div>
        <div className="c-card__item">
          Commenter Comment
          {/* props.comment */}
        </div>
      </div>
    </div>
  );
}
