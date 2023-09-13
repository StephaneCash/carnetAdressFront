import React, { useEffect, useState } from 'react';
import "./Categories.css";
import Card from "./Card.js"
import { getAllCategories } from '../../hooks/hooks';

const Categories = () => {

  const [categories, setCategories] = useState([]);

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

  return (
    <div className='categories'>
      <h2>Carnet d'adresses</h2>
      <div className='grille'>
        {
          categories && categories.length > 0 && categories.map(val => {
            return <Card key={val.id} categorie={val} />
          })
        }
      </div>
    </div>
  )
}

export default Categories