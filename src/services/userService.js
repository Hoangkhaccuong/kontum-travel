import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('api/login', { email, password });
}
const getAllUser=(inputId)=>{
    return axios.get(`/api/getalluser?id=${inputId}`,{id:inputId})
}

export { handleLoginApi,getAllUser };