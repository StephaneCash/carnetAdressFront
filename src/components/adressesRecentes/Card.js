import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrlImage } from '../../bases/basesUrl';

const Card = ({ entite }) => {

    const image = entite && entite.image;

    const desc = entite && entite.desc;
    const nom = entite && entite.nom;

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

    return (
        <Link to={`adresses/${entite && entite.nom}`} className='card'>
            <img src={baseUrlImage + "/" + image} alt="" />

            <div>
                <span className='nom'>{subStringNom()}</span>
                <span className='desc'>{subStringDesc()}</span>
            </div>
        </Link>
    )
}

export default Card