import React, { useContext, useEffect, useState } from 'react';
import LaunchesPopUp from './LaunchesPopUp';
import rocket from '../../style/Img/rocket.png';
import {FaBookmark} from 'react-icons/fa';
import { Context } from '../../context/Context';

const LaunchesItem = ({launch}) => {
    const[active,setActive] = useState(false);
    const{handleFavorites} = useContext(Context);
    const[save,setSave] = useState(false);


    const handleActive =()=>{
        setActive(!active);
    }




    return ( 
        <>
            <LaunchesPopUp active={active} handleActive={handleActive}/>
            <li className="launches__list__item">
                <button type="button" onClick={()=>{handleFavorites(launch); setSave(!save)}} className={save?"saved":null}><FaBookmark/></button>
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