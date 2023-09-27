import React from 'react'
import "./CarrouselComponent.css"
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CarrouselComponent = () => {
    return (
        <div className='carrouselMain'>
            <div className='text'>
                <h4>Retrouvez-vous dans la ville de Kinshasa grâce à notre carnet d'adresses.</h4>
                <Link to="/adresses/maps">
                    <span>Maps</span>
                    <FiSearch />
                </Link>
            </div>
            <div className='overPlay'></div>
        </div>
    )
};

export default CarrouselComponent