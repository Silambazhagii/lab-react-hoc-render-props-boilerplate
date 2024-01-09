import React from 'react'
import CommonHOC from './CommonHOC';

const LikepostHOC = ({ likeHandle, likeCount }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Post {likeCount}</button>
    </div>
  );
};

export default CommonHOC(LikepostHOC)