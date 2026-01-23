import axiosInstance from '../api/axiosInstance';

const SUBDOMAIN = '/testimonials';

export const TestimonialService = {
    // Public: only gets approved ones
    getApproved: () => axiosInstance.get(`${SUBDOMAIN}/approved`),
    // Admin: gets all for moderation
    getAll: () => axiosInstance.get(SUBDOMAIN),
    create: (data) => axiosInstance.post(SUBDOMAIN, data),
    updateStatus: (id, status) => axiosInstance.put(`${SUBDOMAIN}/${id}/status?status=${status}`),
    delete: (id) => axiosInstance.delete(`${SUBDOMAIN}/${id}`),
};