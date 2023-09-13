import React, { useEffect, useState } from 'react'
import "./AdressesRecentes.css"
import { getAllEntites } from '../../hooks/hooks';
import Card from './Card';

const AdressesRecentes = () => {

    const [entites, setEntites] = useState([]);

    const getCategories = async () => {
        try {
            let data = await getAllEntites();
            return setEntites(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className='adressesRecentes'>
            <h4>Adresses populaires</h4>

            <div className='grille'>
                {
                    entites && entites.length > 0 && entites.map(val => {
                        return <Card entite={val} key={val.id} />
                    })
                }
            </div>
        </div>
    )
}

export default AdressesRecentes