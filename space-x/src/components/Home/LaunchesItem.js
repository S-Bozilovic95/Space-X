import React from 'react';
// import rocket from '../../style/Img/rocket.png'

const LaunchesItem = ({launch}) => {

    return ( 
        <li>
            <h4>{launch.name}</h4>
            <img src={launch.links.patch.small=== null ? "rocket" : launch.links.patch.small } alt="rocket image"/>
        </li>
     );
}
 
export default LaunchesItem;