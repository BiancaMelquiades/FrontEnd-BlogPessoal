import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blogpessoal-94b1.onrender.com/swagger-ui/index.html'
})