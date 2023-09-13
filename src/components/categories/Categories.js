import React, { useEffect, useState } from 'react';
import "./Categories.css";
import Card from "./Card.js"
import { getAllCategories } from '../../hooks/hooks';

const Categories = ({ serach }) => {

  const [categories, setCategories] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const valueSearch = serach && serach.toLowerCase();

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

  return (
    <div className='categories'>
      <h2>Carnet d'adresses</h2>
      <div className='grille'>
        {
          categoriesFilter && categoriesFilter.length > 0 ? categoriesFilter.map(val => {
            return <Card key={val.id} categorie={val} />
          }) : "0 catégories adresses trouvées."
        }
        
      </div>
    </div>
  )
}

export default Categories