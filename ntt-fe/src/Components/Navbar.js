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
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ButtonGroup from '@mui/material/ButtonGroup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
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
                    '@media (max-width: 768px)': {
                        width: "68px",
                        fontSize: "12px",
                        padding: "0",
                    },
                },
            },
        },
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
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

    const handleChange = () => {
        setBigMenu(bigMenu => !bigMenu);
    }

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    // Mouse butondan çekilip hiç menünün üzerine gelmezse menü kapanmıyor.
    // Menüyü kapatmak için illa üstüne gelmek gerekiyor.
    function showMenu() {
        if (x.matches)
            return (
                <Box>
                    <ThemeProvider theme={theme}>
                        <Button onClick={handleBigMenu}>Menu Item</Button>
                        <Button onClick={handleBigMenu}>Menu Item</Button>
                        <Button onClick={handleBigMenu}>Menu Item</Button>
                        <Button onClick={handleBigMenu}>Menu Item</Button>
                        <Button onClick={handleBigMenu}>Menu Item</Button>
                        <Button onClick={handleBigMenu}>Menu Item</Button>
                    </ThemeProvider>
                    <Select
                        className="menu-selector"
                        onChange={handleChange}
                        label="More"
                        IconComponent={ExpandMoreIcon}
                        sx= {{
                            textTransform: 'none',
                            borderRadius: '0',
                            height: '40px',
                            width: '110px',
                            border: "none",
                            fontSize: "14px",
                        }}
                    >
                        <MenuItem onClick={handleBigMenu}>Menu Item</MenuItem>
                        <MenuItem onClick={handleBigMenu}>Menu Item</MenuItem>
                        <MenuItem onClick={handleBigMenu}>Menu Item</MenuItem>
                    </Select>
                </Box>
            );
        else
            return (
                <ThemeProvider theme={theme}>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>
                    <Button onClick={handleBigMenu} onMouseOver={handleOpenBigMenu} >Menu Item</Button>

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
                            onClick={handleClickOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Dialog
                            fullScreen
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                        >
                            <List>
                                <ListItemButton onClick={handleClose}>
                                    <ListItemText primary="Category 1" />
                                </ListItemButton>
                                <ListItemButton onClick={handleClose}>
                                    <ListItemText
                                    primary="Category 2"
                                    />
                                </ListItemButton>
                                <ListItemButton onClick={handleClose}>
                                    <ListItemText
                                    primary="Category 3"
                                    />
                                </ListItemButton>
                                <ListItemButton onClick={handleClose}>
                                    <ListItemText
                                    primary="Category 4"
                                    />
                                </ListItemButton>
                                <Divider />
                                </List>
                        </Dialog>
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