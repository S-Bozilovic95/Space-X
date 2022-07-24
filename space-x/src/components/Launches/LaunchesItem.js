import React, { useEffect, useState } from 'react';
import LaunchesPopUp from './LaunchesPopUp';
import rocket from '../../style/Img/rocket.png';
import {FaBookmark} from 'react-icons/fa';

const LaunchesItem = ({launch,handleFavorites}) => {
    const[active,setActive] = useState(false);

    const handleActive =()=>{
        setActive(!active);
    }


    return ( 
        <>
            <LaunchesPopUp active={active}/>
            <li className="launches__list__item">
                <i onClick={()=>handleFavorites(launch)}><FaBookmark/></i>
                <img src={launch.links.mission_patch_small=== null ? rocket : launch.links.mission_patch_small } alt="rocket image"/>
                
                <article>
                    <h4 onClick={()=>handleActive()}>{launch.mission_name}</h4>
                    <p>Rocket: {launch.rocket.rocket_name}</p>
                    <p>Launch: {launch.launch_success?"Successful":"Failed"}</p>
                    <p>Year: {launch.launch_year}</p>
                </article>
                
            </li>
        </>
     );
}
 
export default LaunchesItem;