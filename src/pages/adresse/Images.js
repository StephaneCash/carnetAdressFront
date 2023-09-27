import React from 'react'
import { baseUrlImage } from '../../bases/basesUrl'


const Images = ({ images, nom, subStringNom }) => {

    return (
        <div className='imagesComponent'>
            <h6>Images de {subStringNom(nom)}</h6>
            <div className='grille'>
                {
                    images && images.length > 0 && images.map(val => {
                        return <div className='card' key={val.id}>*
                            <img src={baseUrlImage + "/" + val.url} alt="" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Images