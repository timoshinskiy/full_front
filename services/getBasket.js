import axios from "axios";

export const getBasket = async (email) => {
    try{
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.get(`http://${host}/market/basket/${email}`);
        const data = await response.data;
        return data;
    }catch (e) {
        throw e.message
    }

}