import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Style/Search.css';

const Search = () => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <Box className="search">
            <Box sx={{ minWidth: 120 }} className="search-bar">
                    <input placeholder='Search...' className="search-field"></input>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        className="category-selector"
                        onChange={handleChange}
                        IconComponent={ExpandMoreIcon}
                        sx= {{
                            borderRadius: "0",
                            width: "132px",
                            height: "38px",
                            backgroundColor: "#F4F5F6",
                            border: "none",
                            fontSize: "14px",
                            '@media (max-width: 480px)': {
                                display: "none",
                            },
                            '& .MuiSelect-select': {
                                
                            }
                        }}
                    >
                        <MenuItem value={"Data"}>Data</MenuItem>
                        <MenuItem value={"Category Name"}>Category Name</MenuItem>
                        <MenuItem value={"Category Name"}>Category Name</MenuItem>
                        <MenuItem value={"Category Name"}>Category Name</MenuItem>
                        <MenuItem value={"Category Name"}>Category Name</MenuItem>
                    </Select>
                
            </Box>
            <Button variant="contained" 
                sx={{ 
                    marginLeft: "12px", 
                    height:"40px", 
                    width: "110px", 
                    backgroundColor: "#0059BC",
                    '@media (max-width: 480px)': {
                        marginLeft: "0px",
                        borderRadius: "0 3px 3px 0",
                        border: "none",
                    },
                }} 
                aria-label="search" 
                className="search-button"
            >
                <SearchIcon />
            </Button>
        </Box>
    );
}

export default Search;