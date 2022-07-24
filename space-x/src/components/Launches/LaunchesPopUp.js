import React from 'react';

const LaunchesPopUp = ({active}) => {

    return ( 
        <div  className={`launches__popUp ${active ? "popUpShow" : "popUpHide"}`}>
            <h2>Popup</h2>
        </div>
     );
}
 
export default LaunchesPopUp;