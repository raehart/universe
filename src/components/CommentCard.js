import React from "react";

import '../styles/CommentCard.scss';


export default function CommentCard({comment}) {

  return (
    <div className="comment-card">
      <div className="c-card c-card--grouped">
        <div className="c-card__item">
          <h4>{comment.name}</h4>
        </div>

        <div className="c-card__item">
          {comment.email}
        </div>
        <div role="separator" className="c-card__divider"></div>
        <div className="c-card__item">
          {comment.body}
        </div>
      </div>
    </div>
  );
}
