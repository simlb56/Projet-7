import React from "react";
import { Link } from "react-router-dom";
import "./AccueilCard.scss";
import Apartment from "./Accueil.jsx";

function AccueilCard() {
    return(
         <div className="grid">
         <Link to="/apartmentPage">
           <Apartment />
         </Link>
         <Link to="/apartmentPage">
           <Apartment />
         </Link>
         <Link to="/apartmentPage">
           <Apartment />
         </Link>
         <Link to="/apartmentPage">
           <Apartment />
         </Link>
         <Link to="/apartmentPage">
           <Apartment />
         </Link>
         <Link to="/apartmentPage">
           <Apartment />
         </Link>
       </div>
    )
}

export default  AccueilCard;