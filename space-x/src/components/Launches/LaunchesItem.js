import React, { useState } from 'react';
import PopUp from './PopUp';
// import rocket from '../../style/Img/rocket.png'

const LaunchesItem = ({launch}) => {
    const[active,setActive] = useState(false);

    const handleActive =()=>{
        setActive(!active);
    }


    return ( 
        <>
            <li onClick={()=>handleActive()}>
                <h4>{launch.mission_name}</h4>
                <img src={launch.links.mission_patch_small=== null ? "rocket" : launch.links.mission_patch_small } alt="rocket image"/>
            </li>
            <PopUp active={active}/>
        </>
     );
}
 
export default LaunchesItem;