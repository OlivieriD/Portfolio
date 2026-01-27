import axiosInstance from '../api/axiosInstance';

const SUBDOMAIN = '/about';

export const AboutService = {
    getAbout: () => axiosInstance.get(SUBDOMAIN),
    updateAbout: (data) => axiosInstance.put(SUBDOMAIN, data),
};
