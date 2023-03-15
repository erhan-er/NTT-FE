import React from 'react';
const MenuContext = React.createContext({
    bigMenu: false,
    setbigMenu: () => { },
});

export default MenuContext;