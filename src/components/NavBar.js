import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

return (
    <div className="navbar">
        <ul>
            <li>
            <NavLink end to="/" >Home</NavLink>
            </li>
            <li>
            <NavLink to="/doglistcontainer" >Dog List Container</NavLink>      
            </li>
            <li>    
            <NavLink to="/dogsform" >Submit Your Dogs</NavLink>    
            </li>   
        </ul>
    </div>
);
}

export default NavBar;