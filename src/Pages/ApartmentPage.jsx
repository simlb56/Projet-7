import React, {useState} from "react";
import "./ApartmentPage.scss";


export function ApartmentDescription(props) {
    const contentList = props.content.split(",");

    const [ isContentVisible, setIsContentVisible] = useState(false);
    const [isArrowRotated, setIsArrowRotated] = useState(false);
    const [animationClass, setAnimationClass] = useState("");

    const showContent = () => {
        if (isContentVisible) {
            // Lancer l'animation de sortie avant de masquer le contenu
            setAnimationClass("slide-out");
            setTimeout(() => setIsContentVisible(false), 500);
        } else {
            setAnimationClass("slide-in");
            setIsContentVisible(true); // Afficher immédiatement le contenu
        }
        setIsArrowRotated(!isArrowRotated);
    };
    return (
        <div className={`apartment_description ${props.customClass || ''}`}>
                <div className="description_header"><span>{props.title}</span>
                <div className={`arrow ${isArrowRotated ? 'rotate' : ''}`} onClick={showContent}>
                <img src="arrow_haut.png"></img></div></div>
                
                  {/* Si c'est une liste d'équipements, on génère une liste à puces  */}
            {props.title === "Équipements" && isContentVisible ? (
                <ul className={`description_content ${animationClass}`}>
                    {contentList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                // Si le titre est autre chose que "Équipements", tu affiches props.content comme un texte normal à l'intérieur d'un <p>
                isContentVisible && <p className={`description_content ${animationClass}`}>{props.content}</p>
            )}
        </div>
    );
}

function ApartmentPage() {
    return(
    <div className="apartment-page">
        <div className="apartment-poge"><img src="apartment.png"></img>
        <img src="arrow_left.png"className="arrow-left"style={{ width: '96px', height: '120px' }} ></img>
        <img src="arrow_right.png"className="arrow-right"style={{ width: '96px', height: '120px' }}></img>
         <img src="4.png" className="number-4"style={{ width: '24px', height: '20px' }}></img>
        </div>
        <div className="apartment_header">
        <div className="apartment_title">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <h2>Paris, Île-de-France</h2>
        <div className="apartment_tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
            </div>
            </div>
            <div className="apartment_owner">
            <div className="apartment_owner_details">
                <h3><span>Alexandre</span><span>Dumas</span> </h3>
                <div className="apartment_owner_badge"></div>
                </div>
                <div className="apartment_awner_stars">
                <span><img src="etoilerose.png"></img></span>
                <span><img src="etoilerose.png"></img></span>
                <span><img src="etoilerose.png"></img></span>
                <span><img src="etoilegris.png"></img></span>
                <span><img src="etoilegris.png"></img></span>
                </div>
            </div>
            </div>
            <div className="apartment_description_area">
            <ApartmentDescription title="Description" content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté
                    de nombreux bars et restaurants. Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les 
                    voyageurs en solo et les voyageurs d'affaires. Vous êtes àl station de la gare de l'est ( 7 minutes à pied)."customClass="apartment-description-page"/>
            <ApartmentDescription title="Équipements"content="Climatisation, Wi-Fi, Cuisine, Espace de travail, Fer à repasser, Sèche-cheveux, Cintres"customClass="apartment-description-page"/>
            </div>
        </div>
        ); 
}

export default ApartmentPage;