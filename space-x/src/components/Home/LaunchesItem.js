import React, { useState } from 'react';
import PopUp from './PopUp';
// import rocket from '../../style/Img/rocket.png'

const LaunchesItem = ({launch}) => {
    const[active,setActive] = useState(false)

    const handleActive =()=>{
        setActive(!active);
    }


    return ( 
        <>
            <li onClick={handleActive}>
                <h4>{launch.name}</h4>
                <img src={launch.links.patch.small=== null ? "rocket" : launch.links.patch.small } alt="rocket image"/>
            </li>
            <PopUp active={active}/>
        </>
     );
}
 
export default LaunchesItem;