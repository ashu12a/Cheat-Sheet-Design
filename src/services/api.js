import axios from "axios";
const URL = '';

export async function AddCodeData(values){
    try{
        return await axios.post(`${URL}/addcode`);
    }catch(error){
        console.log('Error While Calling Add code data api');
    }
}