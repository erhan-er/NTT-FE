import React from 'react';
const LikedContext = React.createContext({
    liked: [],
    setLiked: () => { },
});

export default LikedContext;