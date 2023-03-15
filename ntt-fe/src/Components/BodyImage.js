import { Box } from '@mui/system';
import * as React from 'react';
import { useEffect, useContext, useState } from 'react';

import WebPhotos1 from '../Images/Web/Image_1.png';
import WebPhotos2 from '../Images/Web/Image_2.png';
import WebPhotos3 from '../Images/Web/Image_3.png';
import WebPhotos4 from '../Images/Web/Image_4.png';
import TabletPhotos1 from '../Images/Tablet/tablet_1.png';
import TabletPhotos2 from '../Images/Tablet/tablet_2.png';
import TabletPhotos3 from '../Images/Tablet/tablet_3.png';
import TabletPhotos4 from '../Images/Tablet/tablet_4.png';
import MobilePhotos1 from '../Images/Mobile/mobile_1.png';
import MobilePhotos2 from '../Images/Mobile/mobile_2.png';
import MobilePhotos3 from '../Images/Mobile/mobile_3.png';
import MobilePhotos4 from '../Images/Mobile/mobile_4.png';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

import '../Style/BodyImage.css';
const BodyImage = () => {
    var x = window.matchMedia("(max-width: 480px)");
    var y = window.matchMedia("(max-width: 768px)");

    var webphotos = [WebPhotos1, WebPhotos2, WebPhotos3, WebPhotos4];
    var tabletphotos = [TabletPhotos1, TabletPhotos2, TabletPhotos3, TabletPhotos4];
    var mobilephotos = [MobilePhotos1, MobilePhotos2, MobilePhotos3, MobilePhotos4];
    const [photo, setPhoto] = useState(x.matches? mobilephotos : y.matches ? tabletphotos : webphotos);
    const [page, setPage] = useState(0);


    function renderPhoto() {
        return (
            <img src={photo[page]} alt="Fotoğraf" className="image" />
        );
    }

    const handleChange = () => (event, value) => {
        setPage(value - 1);
    };
    
    

    return (
        <div className="body-image">
            {renderPhoto()}
            <Box className="pagination-box">
                <Stack spacing={2}>
                    <Pagination 
                        count={photo.length} 
                        hideNextButton
                        hidePrevButton
                        renderItem={(item) => (
                            <PaginationItem
                                {...item} 
                                sx={{
                                    fontSize: "0px",
                                    lineHeight: "0px",
                                    backgroundColor: "white",
                                    border: "1px solid white",
                                    height: "14px",
                                    minWidth: "5px",
                                    borderRadius: "50%",
                                    '& .MuiButtonBase-root': {
                                        width: "8px",
                                        height: "8px",
                                        '& .Mui-selected': {
                                            backgroundColor: 'black',
                                        },
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
        </div>
    );
}

export default BodyImage;