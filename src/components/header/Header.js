import React, { useContext, useEffect, useState } from 'react';
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FiList, FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom';
import { ContextApp } from '../../context/AppContext';

const Header = () => {

    const [showInput, setShowInput] = useState(false);
    const [scrollPosition, setPosition] = useState(0);

    const {setSearchCategorie} = useContext(ContextApp);

    useEffect(() => {
        function updatePosition() {
            setPosition(window.scrollY);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    useEffect(() => {
        let headerApp = document.querySelector(".headerApp")
        if (scrollPosition > 20) {
            headerApp.classList.add("sticky");
        } else {
            headerApp.classList.remove("sticky");
        }
    }, [scrollPosition]);

    const handleSeacrh = (e) => {
        e.preventDefault();
        setShowInput(false);
    };

    return (
        <div className='headerApp'>
            <Link to="/" className='imageLogo'>
                <img src={logo} alt="Logo" />
            </Link>

            <div className='icons'>
                {
                    showInput ?
                        <form onSubmit={(e) => handleSeacrh(e)} id="search">
                            <input
                                type="search"
                                placeholder='Rechercher une adresse...'
                                onChange={(e) => setSearchCategorie(e.target.value)}
                            />
                            <FiSearch onClick={(e) => handleSeacrh(e)} color='#0F52BA' />
                        </form> :
                        <FiSearch onClick={() => setShowInput(true)} />
                }
                <FiList />
            </div>
        </div>
    )
}

export default Header