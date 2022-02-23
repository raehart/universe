import React from 'react';

import CommentCard from './CommentCard';

export default function CommentList({comments}) {
  return (
      <div className="comment-list">
        <div>List of All Comments</div>
        {comments && comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment}/>
        })}
      </div>
  );
}