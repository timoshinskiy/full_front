import axios from "axios";
import {toast} from "react-toastify";
export const registerAccount = async (obj) => {
    try{
        const host = process.env.HOST || 'localhost:8000';
        const {username,email,password} = obj;
        const response = await axios.post(`http://${host}/auth/register`,{
            username,
            email,
            password
        });
        sessionStorage.setItem('auth',JSON.stringify(obj));
        toast.success(response.data);
    }
    catch (e) {
        toast.error(e.message);
    }
}