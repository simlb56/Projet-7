import React from "react";
import { ImageBanner } from "../components/ImageApropos.jsx";
import { ApartmentDescription } from "./ApartmentPage.jsx"; 
import "../Pages/APropos.scss"

function About() {
    return( <>
    <div className="image_container">
    <ImageBanner /></div>
    <div className="about_container">
    <ApartmentDescription title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
     et toutes les informations sont régulièrement vérifiées par nos équipes."customClass="about-description"/>
    <ApartmentDescription title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa.
    Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."customClass="about-description"/>
    <ApartmentDescription title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa.
    Nous veillons à ce que chaque interaction, que ce soit nos hôtes ou nos locataires, soit empreinte de respect et de beinveillance."customClass="about-description"/>
    <ApartmentDescription title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
     chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
     locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur 
     la sécurité domestique pour nos hôtes."customClass="about-description"/>
    </div>
    </>);
}
export default About;