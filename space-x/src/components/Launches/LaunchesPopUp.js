import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const LaunchesPopUp = ({active,handleActive}) => {

    return ( 
        <div className={active ? "popUpShow" : "popUpHide"}>
            <div className='popUpShow__box'>
                <button onClick={()=>handleActive()}><AiOutlineCloseCircle/></button>
                
                <article className='launches__list__item__popUp'>
                    <p>toza</p>
                    <h2>svetozar</h2>
                </article>
            </div>
        </div>
     );
}
 
export default LaunchesPopUp;