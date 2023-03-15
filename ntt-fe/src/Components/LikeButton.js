import * as React from 'react';

const LikeButton = () => {
    const [liked, setLiked] = React.useState(false);
    const handleClick = () => setLiked(!liked);
    return (
        <button onClick={handleClick}>
            {liked ? 'Unlike' : 'Like'}
        </button>
    );
}

export default LikeButton;