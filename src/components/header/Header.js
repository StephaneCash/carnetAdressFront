import React, { useEffect, useState } from 'react';
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FiList, FiSearch } from "react-icons/fi"

const Header = ({setSearch}) => {

    const [showInput, setShowInput] = useState(false);
    const [scrollPosition, setPosition] = useState(0);

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
            <div className='imageLogo'>
                <img src={logo} alt="Logo" />
            </div>

            <div className='icons'>
                {
                    showInput ?
                        <form onSubmit={(e) => handleSeacrh(e)}>
                            <input
                                type="search"
                                placeholder='Rechercher une adresse...'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FiSearch onClick={(e) => handleSeacrh(e)} color='#0F52BA' />
                        </form> :
                        <FiSearch onClick={() => setShowInput(!showInput)} />
                }
                <FiList />
            </div>
        </div>
    )
}

export default Header