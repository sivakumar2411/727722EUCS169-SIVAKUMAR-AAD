import axios from 'axios';

const API_URL = 'http://localhost:3001'

export const getData = async() => await axios.get(`${API_URL}/UserData`);

export const postData = async(data) =>{

    const{data:edata} = await getData();

    const newid = Math.max(edata.map(user=>user.id),0) + 1;

    const ND = {
        ...data,
        id:newid
    }
    await axios.post(`${API_URL}/UserData`,ND);

}