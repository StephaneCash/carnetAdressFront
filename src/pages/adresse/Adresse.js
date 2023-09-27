import React, { useEffect, useState } from 'react'
import { getAllEntiteByName, getEntityById } from '../../hooks/hooks'
import { useParams } from 'react-router-dom'

const Adresse = () => {

    const params = useParams();

    const [adresse, setAdresse] = useState(null);
    const [adresseId, setAdresseId] = useState(null);

    useEffect(() => {
        const getEntity = async () => {
            let data = await getAllEntiteByName(params && params.name);
            return setAdresseId(data);
        };

        getEntity();
    }, [params]);

    useEffect(()=>{
        const getAdresseById = async () =>{
            let data = await getEntityById(adresseId && adresseId);
            return setAdresse(data);
        }
        getAdresseById();
    }, [adresseId]);

    console.log(adresse)

    return (
        <div>
            {
                adresse && adresse.nom
            }
        </div>
    )
}

export default Adresse