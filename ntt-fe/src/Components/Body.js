import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import '../Style/Body.css';
import { getItems } from '../features/slice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LikedContext from '../Contexts/LikedContext';
import BodyImage from './BodyImage';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

const Body = () => {
    const items = useSelector((state) => state.items);
    const isLoading = useSelector((state) => state.isLoading);
    const filtered = useSelector((state) => state.filtered);
    const { liked, setLiked } = useContext(LikedContext);
    const [filteredLiked, setFilteredLiked] = useState(false);
    const [page, setPage] = useState(0);
    const [maxSize, setMaxSize] = useState(0);

    const [itemList2, setItemList2] = useState([]);
    const dispatch = useDispatch();
    var x = window.matchMedia("(max-width: 480px)");

    useEffect(() => {
        dispatch(getItems())
    }, []);

    
    const handleChange = () => (event, value) => {
        setPage(value - 1);
    };

    
    function listItems() {
        var itemList = [];
        var likedItems = [];
        
        if (filtered.length > 4 && !filteredLiked) {
                itemList = filtered.slice(0, 4);
        }   
        else if (filtered.length > 0 && !filteredLiked) {
            itemList = filtered;
        }   
        else if (filteredLiked) {
            likedItems = items.filter((item) => liked.includes(item.id));
            if (liked.length > 4) {
                itemList = likedItems.slice(0, 4);
            } else {
                itemList = likedItems;
            }
        }

        if (itemList.length > 0) {
            if (x.matches) {
                return <Item key={itemList[page].id} item={itemList[page]} />
            }
            else {
                return itemList.map((item) => {
                    return <Item key={item.id} item={item} />
                });
            }
        } else {
            return (
                <p>
                    Ürün Bulunamadı!
                </p>
            );
        }
    }

    const handleFavoriteList = () => {
        console.log(filteredLiked)
        setFilteredLiked(filteredLiked => !filteredLiked);
    }
/*    
    function showFilteredLiked() {
        if (filteredLiked) {
            if (liked.length > 4) {
                for (let i = 0; i < 4; i++) {
                    setItemList( liked.slice(0, 4) );
                }
            }
    
            if (liked.length > 0) {
                if (x.matches) {
                    return <Item key={itemList[0].id} item={itemList[0]} />
                }
                else {
                    return itemList.map((item) => {
                        return <Item key={item.id} item={item} />
                    });
                }
            } else {
                return (
                    <p>
                        Ürün Bulunamadı!
                    </p>
                );
            }
        }
    }*/

    

    return (
        <Box className="body-root">
            <Box className="body-photos">
                <BodyImage />
            </Box>
            <Box className="body-title">
                <p className="body-title-text">
                    Content Title Goes Here
                </p>
                <Box className="body-title-left">
                    <FavoriteBorderIcon sx={{width: "20px", height: "18px", color: "black"}}/>
                    <p className="body-title-liked">
                        {liked.length} Ürün
                    </p>
                    <Button
                        variant="contained"
                        sx={{
                            '&.MuiButton-root': {
                                textTransform: 'none',
                                borderRadius: "4px",
                                fontSize: "20px",
                                fontWeight: "400",
                                lineHeight: "23px",
                                color: "#fff",
                                backgroundColor: "#0059BC",
                                '@media (max-width: 480px)': {
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                }
                            },
                            height: "27px",
                            width: "106px",
                            '@media (max-width: 480px)': {
                                width: "90px",
                                height: "19px",
                                fontSize: "16px",
                                lineHeight: "19px",
                            }
                        }}
                        onClick={handleFavoriteList}
                    >
                        Beğeniler
                    </Button>
                </Box>
            </Box>
            <Box className="body-items">
                {
                    listItems()
                }
            </Box>
            <Box className="body-see-more">
                <Button
                    variant="contained"
                    endIcon={<EastIcon />}
                    sx={{
                        '&.MuiButton-root': {
                            textTransform: 'none',
                            borderRadius: "4px",
                            fontSize: "20px",
                            fontWeight: "400",
                            lineHeight: "23px",
                            color: "#fff",
                        },
                        height: "56px",
                        width: "193px",
                        marginTop: "48px",
                        '@media (max-width: 480px)': {
                            display: "none",
                        }
                    }}
                >
                    Daha Fazla
                </Button>
                <Box className="pagination-body">
                <Stack spacing={2} sx={{display:(filteredLiked?liked.length:4)>0?"block":"none",}}>
                    <Pagination 
                        count={filteredLiked?liked.length:4} 
                        hideNextButton
                        hidePrevButton
                        color='primary'
                        renderItem={(item) => (
                            <PaginationItem
                                {...item} 
                                sx={{
                                    fontSize: "0px",
                                    lineHeight: "0px",
                                    height: "12px",
                                    minWidth: "5px",
                                    borderRadius: "50%",
                                    backgroundColor: "#D1D1D1",
                                    '& .MuiButtonBase-root': {
                                        width: "8px",
                                        height: "8px",
                                    },
                                }}
                            />
                        )}
                        sx={{
                            paddingRight: "24px",
                        }}
                        onChange={handleChange()}
                    />
                </Stack>
            </Box>
            </Box>
        </Box>
    );
}

export default Body;