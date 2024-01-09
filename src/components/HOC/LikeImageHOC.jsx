import React from 'react'
import CommonHOC from './CommonHOC';

const LikeImage = ({ likeHandle, likeCount }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Image {likeCount}</button>
    </div>
  );
};

export default CommonHOC(LikeImage)