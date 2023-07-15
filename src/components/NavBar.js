import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

return (
    <div className="navbar">
            <NavLink end to="/home" >Home</NavLink>
            <NavLink to="/doglistcard" >DogListCard</NavLink>           
            <NavLink to="/newdogs" >SubmitYourDogs</NavLink>       
    </div>
);
}

export default NavBar;