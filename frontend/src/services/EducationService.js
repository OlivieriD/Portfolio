import axiosInstance from '../api/axiosInstance';
const SUBDOMAIN = '/education';

export const EducationService = {
    getAll: () => axiosInstance.get(SUBDOMAIN),
    create: (data) => axiosInstance.post(SUBDOMAIN, data),
    delete: (id) => axiosInstance.delete(`${SUBDOMAIN}/${id}`),
};