import React from 'react'

const Table = ({ adresse }) => {
    return (
        <table className='table table-striped'>
            <tbody>
                <tr>
                    <td>Nom</td>
                    <td>{adresse && adresse.nom}</td>
                </tr>
                <tr>
                    <td>Avenue</td>
                    <td>{adresse && adresse.adresseComplete}</td>
                </tr>
                <tr>
                    <td>Quartier</td>
                    <td>{adresse && adresse.quartier}</td>
                </tr>
                <tr>
                    <td>Commune</td>
                    <td>{adresse && adresse.commune}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{adresse && adresse.email}</td>
                </tr>
                <tr>
                    <td>Téléphones</td>
                    <td>{adresse && adresse.tels}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table