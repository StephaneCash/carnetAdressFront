import React, { createContext, useState } from 'react'
import App from '../App';

export const ContextApp = createContext();

const AppContext = () => {

    const [serachCategorie, setSearchCategorie] = useState('');

    return (
        <ContextApp.Provider value={{ serachCategorie, setSearchCategorie }}>
            <App />
        </ContextApp.Provider>
    )
}

export default AppContext