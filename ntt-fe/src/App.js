import { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import './Style/style.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Body from './Components/Body';
import LikedContext from './Contexts/LikedContext';
import MenuContext from './Contexts/MenuContext';
import Box from '@mui/material/Box';


//import reducer from './Reducer/Reducer';

// <Divider variant="fullWidth" className="footer-line"/>


function App() {
  const [liked, setLiked] = useState([]);
  const [bigMenu, setBigMenu] = useState(false);
  const value = { liked, setLiked };
  const valueMenu = {bigMenu, setBigMenu};

  return (
    <LikedContext.Provider value={value}>
      <Box className="root">
        <MenuContext.Provider value={valueMenu}>
          <Navbar />
        </MenuContext.Provider>
        <Body />
        <Footer />
      </Box>
    </LikedContext.Provider>
  );
}

export default App;
