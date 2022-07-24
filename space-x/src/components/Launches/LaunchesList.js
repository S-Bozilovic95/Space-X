import React, { useEffect, useRef, useState } from 'react';
import LaunchesItem from './LaunchesItem';

const LaunchesList = ({launches, getLaunches}) => {
   const reference = useRef(null);
   const[favorites,setFavorites] = useState([]);

   const handleFavorites=(value)=>{
      setFavorites(favorites=>[...favorites,value])
   }

   useEffect(()=>{
   // kreira se observer sa odredjenom funk koju izvrsava kad se okine
   const observer = new IntersectionObserver((changes)=>{
      changes.forEach(change =>{
         if(change.isIntersecting){
            getLaunches();
            observer.unobserve(change.target.lastChild);
         }
      })
   })

   // observer posmatra referencu
   observer.observe(reference.current.lastChild);
   },[launches]);


   console.log(favorites);

    return ( 
        <ul ref={reference} className="launches__list">
            {
               launches!== undefined? 
               launches.map((el,index)=>{
                  return <LaunchesItem launch={el} key={index} handleFavorites={handleFavorites}/>
               }):"no result"
            }
        </ul>
     );
}
 
export default LaunchesList;