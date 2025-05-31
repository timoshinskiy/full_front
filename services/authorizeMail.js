import axios from "axios";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import actionCreator from "./actionCreator.js";

export const sendMail = async (email) => {
    const dispatch = useDispatch();
    try {
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.post(`http://${host}/auth/sendmail`, {email});
        toast(response.data);
        dispatch(actionCreator.logout());
    } catch (e) {
        toast.error(e.message);
    }

}