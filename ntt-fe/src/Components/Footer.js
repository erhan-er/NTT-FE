import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Logo from '../Images/Logo_2.png';
import '../Style/Footer.css';


const Footer = () => {
    const [email, setEmail] = React.useState("");

    function showList(x) {
        if (x.matches) { // If media query matches
            return (
                <Box className="footer-top-right">
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                    </Box>
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                    </Box>
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                    </Box>
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                    </Box>
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                    </Box>
                </Box>
            );
        } else {
            return (
                <Box className="footer-top-right">
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                        <Box className="footer-list-items">
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                        </Box>
                    </Box>
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                        <Box className="footer-list-items">
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                        </Box>
                    </Box>
                    <Box className="footer-list">
                        <p className="footer-list-title">Title</p>
                        <Box className="footer-list-items">
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                            <a href="https://www.google.com/">Subtitle</a>
                        </Box>
                    </Box>
                </Box>
            );
        }
    }
    var x = window.matchMedia("(max-width: 768px)")

    return (
        <Box className="footer-background">
            <Box className="footer">
                <Box className="footer-top">
                    <Box className="footer-top-left">
                        <img src={Logo} className="footer-logo" />
                        <Box className="footer-p">
                            Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.
                        </Box>
                        <Box className="footer-signup">
                            <input className="signup" placeholder='Email'></input>
                            <Button
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "#00254F",
                                    borderRadius: "0px",
                                    color: "white",
                                    height: "38px",
                                    width: "101px",
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                    <Box className="footer-top-right">
                        <Box className="footer-list">
                            <p className="footer-list-title">Title</p>
                            <Box className="footer-list-items">
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                            </Box>
                        </Box>
                        <Box className="footer-list">
                            <p className="footer-list-title">Title</p>
                            <Box className="footer-list-items">
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                            </Box>
                        </Box>
                        <Box className="footer-list">
                            <p className="footer-list-title">Title</p>
                            <Box className="footer-list-items">
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                            </Box>
                        </Box>
                        <Box className="footer-list invisible">
                            <p className="footer-list-title">Title</p>
                            <Box className="footer-list-items">
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                            </Box>
                        </Box>
                        <Box className="footer-list invisible">
                            <p className="footer-list-title">Title</p>
                            <Box className="footer-list-items">
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                                <a href="https://www.google.com/">Subtitle</a>
                            </Box>
                        </Box>
                    </Box>

                </Box>



                <Box className="footer-bottom">
                    <Box className="footer-bottom-left">
                        <p>contact@nttdata.com</p>
                    </Box>
                    <Box className="footer-bottom-center">
                        <p>+3 9876 765 444</p>
                    </Box>
                    <Box className="footer-bottom-right">
                        <IconButton sx={{ color: 'white', width: '24px', height: '24px', marginRight: "18px" }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'white', width: '24px', height: '24px', marginRight: "18px" }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'white', width: '24px', height: '24px' }}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;