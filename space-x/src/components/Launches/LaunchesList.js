import React, { useEffect, useRef, useState } from 'react';
import LaunchesItem from './LaunchesItem';

const LaunchesList = ({launches}) => {

   
   return ( 
      <ul className="launches__list">
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