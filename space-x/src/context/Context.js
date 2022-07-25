import React, { createContext,useState } from 'react';

const Context = createContext();

const ContextProvider = ({children}) => {
    const[favorites,setFavorites] = useState([]);

    const handleFavorites=(value)=>{
        if(!favorites.includes(value)){
            setFavorites(favorites=>[...favorites,value]);
        }else{
            // na ovaj nacin cuvam originalni stejt
            let newFav = [...favorites];
            let index =  newFav.indexOf(value)
            newFav.splice(index,1);
            setFavorites(newFav);
        }
    }


    return ( 
        <Context.Provider value={{favorites, handleFavorites}}>
            {children}
        </Context.Provider>
     );
}
 
export {ContextProvider,Context};

