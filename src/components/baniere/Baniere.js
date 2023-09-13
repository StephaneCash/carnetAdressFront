import React from 'react';
import "./Baniere.css";
import { FiChevronRight } from 'react-icons/fi';

const Baniere = () => {
    return (
        <div className='baniere'>
            <span>Magazine courtoisie</span>
            <FiChevronRight />
            <span>Catégories</span>
            <FiChevronRight />
            <span>Carnet d'adresses</span>
        </div>
    )
}

export default Baniere