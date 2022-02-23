import React from "react";

import '../styles/PostCard.scss';

export default function PostCard({post}) {
  return (
    <div className="post-card u-higher">
      <div className="c-card">
        <div role="separator" className="c-card__item c-card__item--divider">
          <h2>{post && post.title}</h2>
        </div>
        <div className="c-card__item">
          <p className="c-paragraph">
            {post && post.body}
          </p>
        </div>
      </div>
    </div>
  );
}
