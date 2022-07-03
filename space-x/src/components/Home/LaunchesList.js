import React, { useEffect, useRef } from 'react';
import LaunchesItem from './LaunchesItem';

const LaunchesList = ({launches, getLaunches}) => {
   const reference = useRef(null);

  console.log(launches);

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

    },[launches])



    return ( 
        <ul ref={reference}>
            {
               launches!== undefined? 
               launches.map((el,index)=>{
                  return <LaunchesItem launch={el} key={index}/>
               }):"no result"
            }
        </ul>
     );
}
 
export default LaunchesList;