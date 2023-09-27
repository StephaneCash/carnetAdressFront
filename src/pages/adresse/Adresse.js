import React, { useEffect, useState } from 'react'
import { getAllEntiteByName, getEntityById } from '../../hooks/hooks'
import { Link, useLocation, useParams } from 'react-router-dom'
import { baseUrlImage } from '../../bases/basesUrl';
import { timestampParser } from '../../utils/Utils';
import { FaHome } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import "./Adresse.css";

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

    const subStringNom = () => {
        return nom && nom.length > 50 ?
            nom && nom.substring(0, 50) + "..." :
            nom
    };

    const description = categorie && categorie.desc;

    const subStringDesc = () => {
        return description && description.length > 50 ?
            description && description.substring(0, 50) + "..." :
            description
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    console.log(categorie)

    return (
        <div className='adresse'>
            <div className='bgImage' style={{ backgroundImage: `url(${baseUrlImage + "/" + image})` }}>
                <div className='text'>
                    <h4>{subStringNom()}</h4>
                    <p className='desc'>
                        {
                            adresse && adresse.desc
                        }
                    </p>
                    <span className='dateCreated'>{timestampParser(adresse && adresse.createdAt)}</span>
                </div>
                <div className='overPlay'></div>
            </div>

            <div className='ban'>
                <FaHome />
                <Link to="/">Accueil</Link>
                <FiChevronRight />
                <Link to={`/categories/${categorie && categorie.id}`}>{subStringDesc()}</Link>
                <FiChevronRight />
                <span>{subStringNom()}</span>
            </div>

            <div className='description'></div>
        </div>
    )
}

export default Adresse