import React from 'react';
import Header from '../components/header/Header';
import "./Main.css"
import Baniere from '../components/baniere/Baniere';
import Categories from '../components/categories/Categories';
import AdressesRecentes from '../components/adressesRecentes/AdressesRecentes';
import CarrouselComponent from '../components/carrousel/Carrousel';

const Main = () => {
    return (
        <div className='mainApp'>
            <Header />
            <CarrouselComponent />
            <Baniere />
            <div className='mainTypesCategories'>
                <div className='categoriesTypes'>
                    <Categories />
                </div>
                <div className='recentes'>
                    <AdressesRecentes/>
                </div>
            </div>
        </div>
    )
}

export default Main