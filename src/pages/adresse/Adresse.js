import React, { useEffect, useState } from 'react'
import { getAllEntiteByName, getEntityById } from '../../hooks/hooks'
import { Link, useLocation, useParams } from 'react-router-dom'
import { baseUrlImage } from '../../bases/basesUrl';
import { timestampParser } from '../../utils/Utils';
import { FaHome } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import "./Adresse.css";
import Images from './Images';
import Rx from './Rx';
import Table from './Table';

const Adresse = () => {

    const params = useParams();

    const location = useLocation();
    const categorie = location && location.state && location.state.val;

    const [adresse, setAdresse] = useState(null);
    const [adresseId, setAdresseId] = useState(null);

    useEffect(() => {
        const getEntity = async () => {
            let data = await getAllEntiteByName(params && params.name);
            return setAdresseId(data);
        };

        getEntity();
    }, [params]);

    useEffect(() => {
        const getAdresseById = async () => {
            let data = await getEntityById(adresseId && adresseId);
            return setAdresse(data);
        }
        getAdresseById();
    }, [adresseId]);

    const nom = adresse && adresse.nom;
    const image = adresse && adresse.image && adresse.image.replace("\\", "/");
    const images = adresse && adresse.images;

    const subStringNom = (item) => {
        return item && item.length > 50 ?
            item && item.substring(0, 50) + "..." :
            item
    };

    const description = categorie && categorie.desc;

    const subStringDesc = () => {
        return description && description.length > 50 ?
            description && description.substring(0, 50) + "..." :
            description
    };

    const subStringDescription = () => {
        return description && description.length > 300 ?
            description && description.substring(0, 300) + "..." :
            description
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const url = location && location.pathname;

    return (
        <div className='adresse'>
            <div className='bgImage' style={{ backgroundImage: `url(${baseUrlImage + "/" + image})` }}>
                <div className='text'>
                    <h4>{subStringNom(nom)}</h4>
                    <p className='desc'>
                        {
                            subStringDescription()
                        }
                    </p>
                    <span className='dateCreated'>{timestampParser(adresse && adresse.createdAt)}</span>
                </div>
                <div className='overPlay'></div>

                <div className='rxShare'>
                    <Rx param={url} />
                </div>
            </div>

            <div className='ban'>
                <FaHome />
                <Link to="/">Accueil</Link>
                <FiChevronRight />
                {
                    categorie && categorie.id ? <>
                        <Link to={`/categories/${categorie && categorie.id}`}>{subStringDesc()}</Link>
                        <FiChevronRight />
                    </> : ""
                }
                <span>{subStringNom(nom)}</span>
            </div>

            <div className='description'>
                {
                    adresse && adresse.desc
                }
            </div>

            <div className='tableDesc'>
                <Table adresse={adresse} />
            </div>

            <div className='images'>
                <Images
                    images={images}
                    nom={nom}
                    subStringNom={subStringNom}
                />
            </div>
        </div>
    )
}

export default Adresse