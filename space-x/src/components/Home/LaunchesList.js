import React from 'react';
import LaunchesItem from './LaunchesItem';

const LaunchesList = ({launches}) => {

    console.log(launches);
    return ( 
        <ul>
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