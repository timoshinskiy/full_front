import axios from "axios";
import {toast} from "react-toastify";

export const sendMail = async () => {
    try {
        const host = process.env.HOST || 'localhost:8000';
        const response = await axios.post(`http://${host}/auth/sendmail`, {
            email: 'nikitosmorozik@gmail.com',
        })
        toast(response);
    } catch (e) {
        toast.error(e.message);
    }

}