import axiosInstance from '../api/axiosInstance';

const SUBDOMAIN = '/testimonials';

export const TestimonialService = {
    // Public: only gets approved ones
    getApproved: () => axiosInstance.get(`${SUBDOMAIN}/public`),
    // Admin: gets all for moderation
    getAll: () => axiosInstance.get(SUBDOMAIN),
    create: (data) => axiosInstance.post(SUBDOMAIN, data),
    update: (id, data) => axiosInstance.patch(`${SUBDOMAIN}/${id}/approve?approved=${data.approved}`),
    updateStatus: (id, approved) => axiosInstance.patch(`${SUBDOMAIN}/${id}/approve?approved=${approved}`),
    delete: (id) => axiosInstance.delete(`${SUBDOMAIN}/${id}`),
};