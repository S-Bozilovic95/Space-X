import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return ( 
        <nav>
            <ul>
                <li><Link to={`/Test`}>test</Link></li>
                <li><Link to={`/Launches`}>launches</Link></li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
        </nav>
     );
}
 
export default Navbar;