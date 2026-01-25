import axiosInstance from '../api/axiosInstance';

const SUBDOMAIN = '/messages';

export const ContactService = {
    getAll: () => axiosInstance.get(SUBDOMAIN),
    delete: (id) => axiosInstance.delete(`${SUBDOMAIN}/${id}`),
};
