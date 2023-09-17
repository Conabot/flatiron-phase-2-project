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
            <NavLink to="/doglistcard" >Dog List Card</NavLink>      
            </li>
            <li>    
            <NavLink to="/dogsform" >Submit Your Dogs</NavLink>    
            </li>   
        </ul>
    </div>
);
}

export default NavBar;