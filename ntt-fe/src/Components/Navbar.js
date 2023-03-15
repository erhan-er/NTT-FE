import React from 'react';
import { useState, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ButtonGroup from '@mui/material/ButtonGroup';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import BigMenu from './BigMenu';
import Search from './Search';
import Logo from '../Images/Logo.png';
import '../Style/Navbar.css';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '0',
                    height: '40px',
                    width: '110px',
                    backgroundColor: 'white',
                    color: "#6A6D70",
                    border: "none",
                    fontSize: "14px",
                    '&:hover': {
                        borderBottom: "2px solid #0059BC",
                        color: "#32363A",
                        backgroundColor: "white",
                    },
                },
            },
        },
    },
});

const Navbar = () => {

    const [more, setMore] = useState(false);
    //const {bigMenu, setBigMenu} = useContext(MenuContext);
    const [bigMenu, setBigMenu] = useState(false);

    const handleOpenBigMenu = () => {
        console.log()
        setBigMenu(true);
    }

    const handleCloseBigMenu = () => {
        setBigMenu(false);
    }

    const handleBigMenu = () => {
        setBigMenu(bigMenu => !bigMenu);
    }

    const handleMore = () => {
        setMore(more => !more);
    }

    // Mouse butondan çekilip hiç menünün üzerine gelmezse menü kapanmıyor.
    // Menüyü kapatmak için illa üstüne gelmek gerekiyor.
    function showMenu() {
        if (x.matches)
            return (
                <ThemeProvider theme={theme}>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Menu
                        label="More"
                        className="select"
                        onChange={handleMore}
                    >
                        <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                        <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                        <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    </Menu>

                </ThemeProvider>
            );
        else
            return (
                <ThemeProvider theme={theme}>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>
                    <Button onMouseOver={handleOpenBigMenu} onClick={handleBigMenu}>Menu Item</Button>

                </ThemeProvider>
            );
    }

    var x = window.matchMedia("(max-width: 768px)");
    return (
        <Box className="navbar">
            <Box className="navbar-top-box">
                <Box className="navbar-top">
                    <img src={Logo} className="navbar-logo" />
                    <Box className="small-menu">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Search className="search" />
            </Box>
            <Box className="navbar-bottom">
                {showMenu()}
                <BigMenu onMouseOut={handleCloseBigMenu} bigMenu={bigMenu} setBigMenu={setBigMenu} />
            </Box>
        </Box>
    );
}

export default Navbar;