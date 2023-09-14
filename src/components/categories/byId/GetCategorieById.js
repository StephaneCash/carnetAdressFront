import React, { useEffect, useState } from 'react';
import "./GetCategorieById.css";
import { getCategorieById } from '../../../hooks/hooks';
import { Link, useParams } from 'react-router-dom';
import { baseUrlImage } from '../../../bases/basesUrl';
import { timestampParser } from '../../../utils/Utils';
import { FaHome } from "react-icons/fa"
import { FiChevronRight } from 'react-icons/fi';
import Card from './Card';

const GetCategorieById = () => {

    const [categorie, setCategorie] = useState(null);

    const params = useParams();
    const id = params && params.id;

    useEffect(() => {
        const getCategorie = async () => {
            try {
                let data = await getCategorieById(parseInt(id));
                return setCategorie(data);
            } catch (error) {
                console.log(error)
            }
        }
        getCategorie();
    }, [id]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const image = categorie && categorie.image && categorie.image.replace("\\", "/");

    const desc = categorie && categorie.desc;
    const nom = categorie && categorie.nom;
    const dateCreated = categorie && categorie.createdAt;
    const entites = categorie && categorie.entites;

    const subStringNom = () => {
        return nom && nom.length > 50 ?
            nom && nom.substring(0, 50) + "..." :
            nom
    };


    const [currentPage, setCurrentPage] = React.useState(1);
    const cunt = 10;

    const lastIndex = currentPage * cunt;
    const firstIndex = lastIndex - cunt;
    const records = entites && entites.length > 0 && entites.slice(firstIndex, lastIndex);
    const nbPage = Math.ceil(entites && entites.length > 0 && entites.length / cunt);
    const numbers = [...Array(entites && nbPage + 1).keys()].slice(1);

    return (
        <div className='getCategorieById'>
            <div className='bgImage' style={{ backgroundImage: `url(${baseUrlImage + "/" + image})` }}>
                <div className='text'>
                    <h4>{subStringNom()}</h4>
                    <span className='entitesLength'>{entites && entites.length} Adresse(s) disponible(s)</span>
                    <span className='dateCreated'>{timestampParser(dateCreated)}</span>
                </div>
                <div className='overPlay'></div>
            </div>

            <div className='ban'>
                <FaHome />
                <Link to="/">Accueil</Link>
                <FiChevronRight />
                <span>{subStringNom()}</span>
            </div>

            <div className='description'>
                {desc && desc}
            </div>

            <h5>{entites && entites.length} Adresse(s) disponible(s)</h5>

            <div className='grille'>
                {
                    records && records.length > 0 ?
                        records.map(val => {
                            return <Card entite={val} key={val.id} />
                        })
                        : "0 Adresses."
                }
            </div>

            <div className='paginationsContent'>
                <nav className='paginationNav'>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <Link to="#" className='page-link'
                                onClick={() => {
                                    prePage()
                                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                                }}
                            >Retour</Link>
                        </li>
                        {
                            numbers && numbers.map((n, i) => {
                                return (
                                    <li key={i} className={`page-item ${currentPage === n} ? 'active' : ''`}>
                                        <Link to="#" className='page-link'
                                            onClick={() => {
                                                changePage(n);
                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                                            }}
                                        >{n}</Link>
                                    </li>
                                )
                            })
                        }
                        <li className='page-item'>
                            <Link to="#" className='page-link'
                                onClick={() => {
                                    nextPage()
                                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                                }
                                }
                            >Suivant</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== nbPage) {
            setCurrentPage(currentPage + 1)
        }
    }
}

export default GetCategorieById