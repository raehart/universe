import React from 'react';

import CommentCard from './CommentCard';

export default function CommentList({comments}) {
  return (
      <div className="comment-list">
        <h3>Comments</h3>
        {comments && comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment}/>
        })}
      </div>
  );
}