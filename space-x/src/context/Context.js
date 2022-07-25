import React, { createContext,useState } from 'react';

const Context = createContext();

const ContextProvider = ({children}) => {
    const[favorites,setFavorites] = useState([]);

    const handleFavorites=(value)=>{
        setFavorites(favorites=>[...favorites,value]);
    }


    return ( 
        <Context.Provider value={{favorites, handleFavorites}}>
            {children}
        </Context.Provider>
     );
}
 
export {ContextProvider,Context};

