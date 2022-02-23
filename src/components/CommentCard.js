import React from "react";

export default function CommentCard() {

  return (
    // map over all comments
    <div className="comment-card">
      <div className="c-card c-card--grouped">
        <div className="c-card__item">
          Commenter Name
        </div>

        <div className="c-card__item">
          Commenter Email
        </div>
        <div role="separator" className="c-card__divider"></div>
        <div className="c-card__item">
          Commenter Comment
        </div>
      </div>
    </div>
  );
}
