import axios from "axios";

export const orderProduct = async (product_id,email) => {
    try{
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.put(`http://${host}/market/product/order`,{id: product_id, email});
        const data = response.data;
        return data;
    }catch (e) {
        throw e.message
    }
}