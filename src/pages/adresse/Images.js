import React from 'react'
import { baseUrlImage } from '../../bases/basesUrl'
import { FaExpand } from 'react-icons/fa';

const Images = ({ images, nom, subStringNom }) => {

    return (
        <div className='imagesComponent'>
            <h6>Images de {subStringNom(nom)}</h6>

            <div className='grille'>
                {
                    images && images.length > 0 && images.map(val => {
                        console.log(val)
                        return <div className='card'>
                            <img src={baseUrlImage + "/" + val.url} alt="" />

                            <div className='icons'>
                                <div className='bloc1'>
                                    <FaExpand />
                                </div>

                                <div className='bloc2'></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Images