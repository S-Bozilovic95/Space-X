import React, { createContext,useEffect,useState } from 'react';
import API from '../assets/apiV3';

const Context = createContext();

const ContextProvider = ({children}) => {
    // states
    const[favorites,setFavorites] = useState([]);



    // functions
    const handleFavorites=(value)=>{
        if(!favorites.includes(value)){
            setFavorites(favorites=>[...favorites,value]);
            localStorage.setItem("favoriteLaunches",favorites);
            
        }else{
            // na ovaj nacin cuvam originalni stejt
            let newFav = [...favorites];
            let index =  newFav.indexOf(value)
            newFav.splice(index,1);
            setFavorites(newFav);
            localStorage.setItem("favoriteLaunches",favorites);
        }
    }


    return ( 
        <Context.Provider value={{favorites, handleFavorites}}>
            {children}
        </Context.Provider>
     );
}
 
export {ContextProvider,Context};