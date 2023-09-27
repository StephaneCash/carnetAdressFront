import React from 'react'
import { baseUrlImage } from '../../bases/basesUrl'
import { FaExpand } from 'react-icons/fa';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';


const Images = ({ images, nom, subStringNom, params }) => {

    const screen = useFullScreenHandle();

    return (
        <div className='imagesComponent'>
            <h6>Images de {subStringNom(nom)}</h6>

            <div className='grille'>
                {
                    images && images.length > 0 && images.map(val => {
                        console.log(val)
                        return <FullScreen handle={screen}>
                            <div className='card'>
                                <img src={baseUrlImage + "/" + val.url} alt="" />

                                <div className='icons'>
                                    <div className='bloc1'>
                                        <FaExpand
                                            onClick={() => {
                                                screen.enter()
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FullScreen>
                    })
                }
            </div>
        </div>
    )
}

export default Images