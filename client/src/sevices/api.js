import axios from 'axios';

const   API_URL='http://localhost:8000'

export const uploadFile=async(data)=>{
    try {
      let responce= await  axios.post(`${API_URL}/upload`,data)
      return responce.data
    } catch (error) {
        console.log(error)
    }
    
}