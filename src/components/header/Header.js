import React, { useEffect, useState } from 'react';
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FiList, FiSearch } from "react-icons/fi"

const Header = () => {

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
    }, [scrollPosition])

    return (
        <div className='headerApp'>
            <div className='imageLogo'>
                <img src={logo} alt="Logo" />
            </div>

            <div className='icons'>
                <FiSearch />
                <FiList />
            </div>
        </div>
    )
}

export default Header