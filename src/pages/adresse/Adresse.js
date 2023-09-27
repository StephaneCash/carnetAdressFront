import React, { useEffect, useState } from 'react'
import { getAllEntiteByName } from '../../hooks/hooks'
import { useParams } from 'react-router-dom'

const Adresse = () => {

    const params = useParams();

    const [adresse, setAdresse] = useState(null);

    useEffect(() => {
        const getEntity = async () => {
            let data = await getAllEntiteByName(params && params.name);
            return setAdresse(data && data[0]);
        };

        getEntity();
    }, [params]);

    return (
        <div>
            {
                adresse && adresse.nom
            }
        </div>
    )
}

export default Adresse