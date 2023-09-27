import axios from "axios"
import { baseUrl } from "../bases/basesUrl"

export const getAllCategories = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/categories`);
        const categories = data && data.data;
        return categories;
    } catch (error) {
        console.log(error.response);
    }
};

export const getCategorieById = async (id) => {
    try {
        const { data } = await axios.get(`${baseUrl}/categories/${id}`);
        const categories = data && data.data;
        return categories;
    } catch (error) {
        console.log(error.response);
    }
};

export const getAllEntites = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/entites`);
        const entites = data && data.data;
        return entites;
    } catch (error) {
        console.log(error.response);
    }
};

export const getAllEntiteByName = async (name) => {
    try {
        const { data } = await axios.get(`${baseUrl}/entites`);
        const entites = data && data.data;

        const entite = entites && entites.length > 0 && entites.filter(val => val.nom && val.nom.includes(name));
        return entite && entite.length > 0 && entite[0] && entite[0].id;
    } catch (error) {
        console.log(error.response);
    }
};

export const getEntityById = async (id) => {
    try {
        const { data } = await axios.get(`${baseUrl}/entites/${id}`);
        const entite = data && data.data;
        return entite;
    } catch (error) {
        console.log(error.response);
    }
};