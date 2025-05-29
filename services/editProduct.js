import axios from "axios";

export const editProduct = async (obj) => {
    try {
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.put(`http://${host}/market/edit`,obj);
        return response.data;
    }catch (e) {
        throw e.message;
    }
}