import axios from "axios";

export const removeOrderProduct = async (id) => {
  try{
      const host = process.env.HOST || 'localhost:8000';
      const response = await axios.put(`http://${host}/market/product/unorder`,{id});
      const data = response.data;
      return data;
  }catch (e) {
      throw e.message;
  }
}