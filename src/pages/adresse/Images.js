import React from 'react'
import { baseUrlImage } from '../../bases/basesUrl'
import { FaExpand } from 'react-icons/fa';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';


const Images = ({ images, nom, subStringNom }) => {

    const screen = useFullScreenHandle();

    return (
        <div className='imagesComponent'>
            <h6>Images de {subStringNom(nom)}</h6>

            <div className='grille'>
                {
                    images && images.length > 0 && images.map(val => {
                        return <div className='card' key={val.id}>
                            <FullScreen handle={screen}>
                                <img src={baseUrlImage + "/" + val.url} alt="" />
                                <div className='icons'>
                                    <FaExpand
                                        onClick={() => {
                                            screen.enter()
                                        }}
                                    />
                                </div>
                            </FullScreen>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Images