import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import LikedContext from '../Contexts/LikedContext';

import '../Style/Item.css';
const Item = ({ item }) => {
    const { liked, setLiked } = useContext(LikedContext);
    const [seeMore, setSeeMore] = useState(false);

    const handleFavorite = () => {
        if (liked.includes(item.id)) {
            setLiked(liked.filter((id) => id !== item.id));
        }
        else {
            setLiked([...liked, item.id]);
        }
    }

    var x = window.matchMedia("(max-width: 768px)");
    var y = window.matchMedia("(min-width: 480px)");
    function showDescription () {
        if (x.matches && y.matches) {
            return (
                <p className="item-description-text">
                    {item.description.length > 25 ? item.description.substring(0, 25) + "..." : item.description}
                    {item.description.length > 25 ? <span className="item-description-see-more" onClick={() => setSeeMore(!seeMore)}>Daha Fazla Göster</span> : null}
                </p>
            );
        }
        else {
            return (
                <p className="item-description-text">
                    {item.description.length > 90 ? item.description.substring(0, 90) + "..." : item.description}
                </p>
            );
        }
    }
    return (
        <div className="item-root">
            <a className="item-box" href="https://www.google.com/">
                <img className="item-image" src={item.imageUrl} />
                <Box className="item-text">
                    {item.name}
                </Box>
                <Box className="item-price">
                    {item.price} TL
                </Box>
                <Box className="item-description">
                    <p className="item-description-title">Description</p>
                        {
                            showDescription()
                        }
                </Box>
                <Box className="item-delivery">
                    {item.shippingMethod}
                </Box>
            </a>
            <IconButton
                    sx={{
                        position: "absolute",
                        top: "24px",
                        right: "24px",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        zIndex: "1",
                        backgroundColor: "#fff",
                    }}
                    onClick={handleFavorite}
                >
                    {
                        liked.includes(item.id) ? <FavoriteIcon sx={{ color: "red", width: "13px", height: "12px"}} /> : <FavoriteBorderIcon sx={{ color: "#D1D1D1", width: "13px", height: "12px" }} />
                    }
                </IconButton>
        </div>
    );
}

export default Item;