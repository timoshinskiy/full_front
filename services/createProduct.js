import axios from "axios";

export const createProduct = async (obj) => {
    try{
        for(let key in obj){
            if(!obj[key]){
                throw new Error('Bad inputs!');
            }
        }
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.post(`http://${host}/market/add`,obj);
        const data = response.data;
        return data
    }catch (e) {
        throw e.message;
    }
}