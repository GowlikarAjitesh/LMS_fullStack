import axios from "axios";

const server_url = "http://localhost:3000";

const axiosInstance = axios.create(
    {
        baseURL: server_url,
    }
);

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("Bearer");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;