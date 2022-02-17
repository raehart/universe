import React from "react";
import './PostCard.scss';

export default function PostCard() {
  return (
    <div className="post-card">
      <div className="c-card">
        <div role="separator" className="c-card__item c-card__item--divider">
          Header
        </div>
        <div className="c-card__item">
          <p className="c-paragraph">
            Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint
            eloquentiam sea et.
          </p>
        </div>
      </div>
    </div>
  );
}
