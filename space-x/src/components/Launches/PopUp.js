import React from 'react';

const PopUp = ({active}) => {

    return ( 
        <div  className={ active ? "popUpShow" : "popUpHide"}>
            <h2>Popup</h2>
        </div>
     );
}
 
export default PopUp;