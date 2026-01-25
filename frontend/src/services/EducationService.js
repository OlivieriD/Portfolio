import axiosInstance from '../api/axiosInstance';
const SUBDOMAIN = '/education';

export const EducationService = {
    getAll: () => axiosInstance.get(SUBDOMAIN),
    create: (data) => axiosInstance.post(SUBDOMAIN, data),
    update: (id, data) => axiosInstance.put(`${SUBDOMAIN}/${id}`, data),
    delete: (id) => axiosInstance.delete(`${SUBDOMAIN}/${id}`),
};