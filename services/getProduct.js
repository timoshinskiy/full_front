import axios from "axios";

export const getProduct = async (id) => {
    try {
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.get(`http://${host}market/product/${id}`);
        const data = response.data;
        return data;
    }catch (e) {
        throw e.message;
    }
}