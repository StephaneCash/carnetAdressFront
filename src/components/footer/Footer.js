import React from 'react';
import "./Footer.css";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='footer'>
            <div className='row1'>
                <ul>
                    <li>Entreprise</li>
                    <li>De nous</li>
                    <li>Termes</li>
                    <li>Confidentialités</li>
                    <li>Contactez-nous</li>
                    <li>Paramètres de cookies</li>
                </ul>

                <ul>
                    <li>Ressources</li>
                    <li>Tarification</li>
                    <li>Développeurs</li>
                    <li>Status Page</li>
                    <li>Aide</li>
                    <li>Blog</li>
                </ul>

                <ul>
                    <li>Des produits</li>
                    <li>Design studio</li>
                    <li>Termes</li>
                    <li>Confidentialités</li>
                    <li>Contactez-nous</li>
                    <li>Paramètres de cookies</li>
                </ul>

                <ul>
                    <li>Solutions</li>
                    <li>Pour commerçants</li>
                    <li>Collaboration</li>
                    <li>Utilisations</li>
                    <li>Pour les professionnels</li>
                    <li>Pour éducation</li>
                </ul>

                <ul>
                    <li>Découvrir</li>
                    <li>Exemples</li>
                    <li>Modèles</li>
                    <li>Rechercher</li>
                    <li>Pour les professionnels</li>
                    <li>Pour éducation</li>
                </ul>
            </div>
            <div className='row2'>
                <div className='col1'>
                    <span>Magazine COURTOISIE</span> <span>&copy;</span> <span>Droits d'auteur {year} - Tout droit réservé</span>
                </div>

                <div className='col2'>
                    <FiFacebook/>
                    <FiTwitter/>
                    <FiInstagram/>
                    <FiYoutube/>
                    <FiLinkedin/>
                </div>
            </div>
        </div>
    )
}

export default Footer