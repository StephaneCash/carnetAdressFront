import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrlImage } from '../../../bases/basesUrl';

const Card = ({ entite }) => {

    const imageCategorie = entite && entite.image;
    const desc = entite && entite.desc;
    const nom = entite && entite.nom;
    const commune = entite && entite.commune;

    const subStringDesc = () => {
        return desc && desc.length > 120 ?
            desc && desc.substring(0, 120) + "..." :
            desc
    };

    const subStringNom = () => {
        return nom && nom.length > 30 ?
            nom && nom.substring(0, 30) + "..." :
            nom
    };

    const subStringCommune = () => {
        return commune && commune.length > 25 ?
            commune && commune.substring(0, 25) + "..." :
            commune
    };

    return (
        <Link to={`/adresses/${entite && entite.nom}`} className='card'>
            <img src={baseUrlImage + "/" + imageCategorie} alt={nom} />
            <span className='nom'>{subStringNom()}</span>
            <span className='textEntite'>{subStringCommune()}</span>
            <span className='descriptionEntite'>{subStringDesc()}</span>
        </Link>
    )
}

export default Card;