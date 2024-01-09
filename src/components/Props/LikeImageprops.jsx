import React from 'react';
import CommonProps from './CommonProps';

export default function LikeImageprops() {
    return (
        <CommonProps>
            {({ like, handleLike }) => (
                <button onClick={handleLike}>Like Image {like}</button>
            )}
        </CommonProps>
    );
}
