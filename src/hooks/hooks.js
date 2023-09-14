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
        const categories = data && data.data;
        return categories;
    } catch (error) {
        console.log(error.response);
    }
};