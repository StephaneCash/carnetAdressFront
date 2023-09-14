import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import GetCategorieById from '../components/categories/byId/GetCategorieById';
import Header from "../components/header/Header"

const RoutesPages = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/categories/:id' element={<GetCategorieById />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPages