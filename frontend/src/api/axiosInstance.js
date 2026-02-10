import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api/v1',
});

export const injectToken = (getAccessTokenSilently) => {
    axiosInstance.interceptors.request.use(async (config) => {
        try {
            const token = await getAccessTokenSilently();
            config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
            // Non-authenticated request (Public GETs)
        }
        return config;
    });
};

export default axiosInstance;