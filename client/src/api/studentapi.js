import axios from 'axios'

const Url='http://localhost:5000/student';

export const createstudent=(data)=>axios.post(Url,data);
export const fetchstudent=()=>axios.get(Url);
export const deletestudent=(id)=>axios.delete(`${Url}/${id}`)








