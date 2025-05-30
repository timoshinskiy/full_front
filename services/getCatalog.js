import axios from "axios";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

export const getCatalog = async () => {
    try{
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.get(`http://${host}/market/catalog`);
        return response.data;
    }catch (e) {
        throw e.response.data;
    }
}
export const getAdminCatalog = async (username) => {
    try{
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.get(`http://${host}/market/admin/${username}`);
        return response.data;
    }catch (e) {
        throw e.response.data;
    }
}