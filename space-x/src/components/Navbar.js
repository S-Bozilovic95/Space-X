import React from 'react';
import { Link } from 'react-router-dom';
import {FaRocket} from 'react-icons/fa';
import {SiSpacex} from 'react-icons/si';
import {RiSettings5Fill} from 'react-icons/ri';


const Navbar = () => {

    return ( 
        <nav className='navbar'>
            <i className='navbar__logo'><SiSpacex/></i>
            <ul className='navbar__linkList'>
                <li><Link to={`/`}><FaRocket/></Link></li>
                <li><Link to={`/Test`}><FaRocket/></Link></li>
                <li><a href='#'><FaRocket/></a></li>
                <li><a href='#'><FaRocket/></a></li>
                <li><a href='#'><FaRocket/></a></li>
            </ul>
            <a href='#' className='navbar__settings'><RiSettings5Fill/></a>
        </nav>
     );
}
 
export default Navbar;