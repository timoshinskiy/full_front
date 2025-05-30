import axios from "axios";
import {toast} from "react-toastify";
import actionCreator from "./actionCreator.js";

export const loginAccount = async(obj) => {
    try {
        const host = process.env.HOST || 'localhost:8000';
        const {email,password} = obj;
        const response = await axios.post(`http://${host}/auth/login` , {email,password});
        console.log(response);
        const {username,admin_role,email_verified,wallet} = await response.data;
        const resobj = {username,email,admin_role,email_verified,wallet}
        toast.success('Successfully login');
        sessionStorage.setItem('auth',JSON.stringify(resobj));
        return resobj;
    }
    catch (e) {
        throw e.response.data;
    }
}