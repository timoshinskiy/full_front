import axios from "axios";

export const createProduct = async (obj) => {
    try {
        /*  for(let key in obj.data){
              if(!obj[key]){
                  throw new Error('Bad inputs!');
              }
          } */
        console.log(obj)
        let host = process.env.HOST || 'localhost:8000';
        const response = await axios.post(`http://${host}/market/add`, obj, {headers: {'Content-Type': 'multipart/form-data'}});
        const data = response.data;
        return data
    } catch (e) {
        throw e.message;
    }
}