import React from 'react'
import { baseUrlImage } from '../../bases/basesUrl'
import { Link } from 'react-router-dom';


const Images = ({ images, nom, subStringNom }) => {

    const [currentPage, setCurrentPage] = React.useState(1);
    const cunt = 10;

    const lastIndex = currentPage * cunt;
    const firstIndex = lastIndex - cunt;
    const records = images && images.length > 0 && images.slice(firstIndex, lastIndex);
    const nbPage = Math.ceil(images && images.length > 0 && images.length / cunt);
    const numbers = [...Array(images && nbPage + 1).keys()].slice(1);

    return (
        <div className='imagesComponent'>
            <h6>Images de {subStringNom(nom)}</h6>
            <div className='grille'>
                {
                    records && records.length > 0 && records.map(val => {
                        return <div className='card' key={val.id}>
                            <img src={baseUrlImage + "/" + val.url} alt="" />
                        </div>
                    })
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
                                }}
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

export default Images