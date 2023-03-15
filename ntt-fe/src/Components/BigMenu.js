import React, { useEffect } from 'react';
import '../Style/Menu.css';
import { useState, useContext } from 'react';
import MenuContext from '../Contexts/MenuContext';
import Image from "../Images/menu.png";
import Box from '@mui/material/Box';

const BigMenu = ({ bigMenu, setBigMenu }) => {

    /*
    const handleCloseMenu = () => {
        setBigMenu(false);
    }*/

    useEffect(() => {
    }, [bigMenu]);

    var x = window.matchMedia("(max-width: 768px)");

    return (
        <Box className="Menu" sx={{ display: bigMenu ? "flex" : "none"}} /*onMouseOut={handleCloseMenu}*/>
            <Box className="menu-list">
                <Box>
                    <p className="menu-list-title">Header</p>
                    <Box className="menu-list-items">
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                    </Box>
                </Box>
                <Box>
                    <p className="menu-list-title">Header</p>
                    <Box className="menu-list-items">
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                        <a href="https://www.google.com/">Subheader</a>
                    </Box>
                </Box>
            </Box>
            <Box>
                <img src={Image} className="menu-img" />
            </Box>
        </Box>
    );
}

export default BigMenu;