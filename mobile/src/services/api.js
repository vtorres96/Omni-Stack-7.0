import axios from 'axios'

const api = axios.create({
    // alterar para  http://192.168.0.4:3333 
    baseURL: 'http://localhost:3333'
})

export default api