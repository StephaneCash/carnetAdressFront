import React, { useContext, useEffect, useState } from 'react';
import "./Categories.css";
import Card from "./Card.js"
import { getAllCategories } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { ContextApp } from '../../context/AppContext';

const Categories = () => {

  const { serachCategorie } = useContext(ContextApp);

  const [categories, setCategories] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const valueSearch = serachCategorie && serachCategorie.toLowerCase();

  const cunt = 10;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  const getCategories = async () => {
    try {
      let data = await getAllCategories();
      return setCategories(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const arr = []
    categories && categories.length > 0 && categories.filter((value) => {
      const nom = value && value && value.nom.toLowerCase();
      if (nom && nom.includes(valueSearch)) {
        return arr.push(value)
      } else {
        return value;
      }
    });
    setCategoriesFilter(arr);
  }, [categories, valueSearch]);

  const [currentPage, setCurrentPage] = React.useState(1);

  const lastIndex = currentPage * cunt;
  const firstIndex = lastIndex - cunt;
  const records = categoriesFilter && categoriesFilter.length > 0 && categoriesFilter.slice(firstIndex, lastIndex);
  const nbPage = Math.ceil(categoriesFilter && categoriesFilter.length > 0 && categoriesFilter.length / cunt);
  const numbers = [...Array(categoriesFilter && nbPage + 1).keys()].slice(1);

  return (
    <div className='categories'>
      <h2>Carnet d'adresses</h2>
      <div className='grille'>
        {
          records && records.length > 0 ? records.map(val => {
            return <Card key={val.id} categorie={val} />
          }) : "0 catégories adresses trouvées."
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

export default Categories