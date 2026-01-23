import axiosInstance from '../api/axiosInstance';
const SUBDOMAIN = '/skills';

export const SkillService = {
    getAll: () => axiosInstance.get(SUBDOMAIN),
    create: (data) => axiosInstance.post(SUBDOMAIN, data),
    delete: (id) => axiosInstance.delete(`${SUBDOMAIN}/${id}`),
};