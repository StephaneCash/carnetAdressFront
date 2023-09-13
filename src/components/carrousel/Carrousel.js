import React from 'react'
import "./CarrouselComponent.css"
import { FiSearch } from 'react-icons/fi';

const CarrouselComponent = () => {
    return (
        <div className='carrouselMain'>
            <div className='text'>
                <h4>Retrouvez-vous dans la ville de Kinshasa grâce à notre carnet d'adresses.</h4>
                <button>
                    <span>Maps</span>
                    <FiSearch />
                </button>
            </div>
            <div className='overPlay'></div>
        </div>
    )
};

export default CarrouselComponent