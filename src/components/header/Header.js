import React from 'react';
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FiList, FiSearch } from "react-icons/fi"

const Header = () => {
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