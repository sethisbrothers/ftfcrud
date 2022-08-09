import React from "react";

 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-warning">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 30 + '%'}} src="http://wordactualite.w.o.pic.centerblog.net/48044f10.gif" alt="logo of ftf"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               <strong>Create Players</strong>
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}