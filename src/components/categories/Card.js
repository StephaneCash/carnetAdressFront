import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrlImage } from '../../bases/basesUrl'

const Card = ({ categorie }) => {

  const imageCategorie = categorie && categorie.image;
  const entites = categorie && categorie.entites;
  const desc = categorie && categorie.desc;
  const nom = categorie && categorie.nom;

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
    <Link to={`categories/${categorie && categorie.id}`} className='card'>
      <img src={baseUrlImage + "/" + imageCategorie} alt={nom} />
      <span className='nom'>{subStringNom()}</span>
      <span className='text'>{`${entites && entites.length} adresses de ${subStringNom()} disponibles pour bien vous guider`}</span>
      <span className='description'>{subStringDesc()}</span>
    </Link>
  )
}

export default Card;